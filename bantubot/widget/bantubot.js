/**
 * BantuBot — embeddable AI assistant + FAQ quick-chips + WhatsApp escalation.
 *
 * Zero dependencies, framework-agnostic, rendered inside a Shadow DOM so site
 * CSS cannot leak in or out. Model output is only ever written via textContent.
 *
 * Embed:
 *   <script type="module" src="/bantubot/bantubot.js" data-bantubot
 *           data-endpoint="/api/bantubot/chat"
 *           data-kb="/bantubot/knowledge-base.json"></script>
 * or programmatically: import { mountBantuBot } from "./bantubot.js"; mountBantuBot({...})
 */

export const DEFAULTS = {
  endpoint: "/api/bantubot/chat",
  kbUrl: "/bantubot/knowledge-base.json",
  whatsapp: "6289686804015",
  botName: "BantuBot",
  greeting:
    "Halo! 👋 Saya BantuBot, asisten virtual BantuBuatWeb. Mau tanya soal paket, harga, atau lama pengerjaan? Pilih topik di bawah atau ketik pertanyaan Anda.",
  maxHistory: 12,
  maxInputChars: 500,
  storageKey: "bantubot:v1",
};

// Phrases that signal buying intent or a request for a human — escalate even
// if the model does not flag it.
const ESCALATION_PATTERNS = [
  /\b(mau|ingin|siap)\s+(pesan|order|bikin|buat|deal|lanjut|ambil)\b/i,
  /\b(pesan|order)\s+(sekarang|paket|website)\b/i,
  /\b(hubungi|bicara|ngobrol|chat)\s+(admin|cs|manusia|orang|tim)\b/i,
  /\b(admin|cs|customer service)\s*(dong|nya|aja|saja)?\s*$/i,
  /\b(nego|negosiasi|diskon|potongan harga|invoice|penawaran|quotation|dp)\b/i,
  /\b(jadwal|jadwalkan)\s+(meeting|meet|call|konsultasi)\b/i,
  /\b(telepon|telpon|nomor wa|nomor whatsapp)\b/i,
];

export function detectEscalation(text) {
  if (typeof text !== "string") return false;
  return ESCALATION_PATTERNS.some((re) => re.test(text));
}

/** Prefilled wa.me link carrying the visitor's context so the admin can close fast. */
export function buildWhatsAppUrl(phone, { lastQuestion = "", intent = "", page = "" } = {}) {
  const digits = String(phone).replace(/\D/g, "");
  const lines = ["Halo BantuBuatWeb, saya dari chat BantuBot di website."];
  if (intent) lines.push(`Kebutuhan: ${intent}`);
  if (lastQuestion) lines.push(`Pertanyaan saya: "${lastQuestion.slice(0, 300)}"`);
  if (page) lines.push(`Halaman: ${page}`);
  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Trim history to the last N well-formed turns, starting with a user turn. */
export function sanitizeHistory(history, max = DEFAULTS.maxHistory) {
  if (!Array.isArray(history)) return [];
  const clean = history
    .filter(
      (m) =>
        m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim(),
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-max);
  while (clean.length && clean[0].role !== "user") clean.shift();
  return clean;
}

const STYLES = `
:host { all: initial; }
* { box-sizing: border-box; font-family: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.launcher { position: fixed; right: 20px; bottom: 20px; z-index: 2147483000; width: 60px; height: 60px; border-radius: 50%;
  border: 0; cursor: pointer; background: #111827; color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,.25);
  display: grid; place-items: center; transition: transform .2s; }
.launcher:hover { transform: scale(1.06); }
.launcher:focus-visible, button:focus-visible, textarea:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }
.launcher svg { width: 28px; height: 28px; }
.badge { position: absolute; top: -2px; right: -2px; width: 14px; height: 14px; border-radius: 50%; background: #22c55e; border: 2px solid #fff; }
.panel { position: fixed; right: 20px; bottom: 92px; z-index: 2147483000; width: 380px; max-width: calc(100vw - 24px);
  height: 560px; max-height: calc(100vh - 120px); background: #fff; color: #111827; border-radius: 18px;
  box-shadow: 0 16px 48px rgba(0,0,0,.22); display: flex; flex-direction: column; overflow: hidden; }
.panel[hidden] { display: none; }
@media (max-width: 480px) {
  .panel { right: 0; bottom: 0; width: 100vw; max-width: 100vw; height: 100dvh; max-height: 100dvh; border-radius: 0; }
  .launcher { right: 14px; bottom: 14px; }
}
header { background: #111827; color: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 10px; }
header > svg { width: 26px; height: 26px; flex-shrink: 0; }
header .title { flex: 1; min-width: 0; }
header strong { display: block; font-size: 15px; }
header small { opacity: .75; font-size: 12px; }
.icon-btn { background: transparent; border: 0; color: inherit; cursor: pointer; padding: 6px; border-radius: 8px; font-size: 18px; line-height: 1; }
.log { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 10px; background: #f9fafb; }
.msg { max-width: 85%; padding: 10px 12px; border-radius: 14px; font-size: 14px; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word; }
.msg.bot { background: #fff; border: 1px solid #e5e7eb; align-self: flex-start; border-bottom-left-radius: 4px; }
.msg.user { background: #111827; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.typing { align-self: flex-start; font-size: 13px; color: #6b7280; padding: 4px 6px; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px 14px; border-top: 1px solid #e5e7eb; background: #fff; max-height: 112px; overflow-y: auto; }
.chip { border: 1px solid #d1d5db; background: #fff; color: #111827; border-radius: 999px; padding: 6px 12px; font-size: 13px; cursor: pointer; }
.chip:hover { background: #f3f4f6; }
.wa-card { align-self: stretch; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 14px; padding: 12px; font-size: 13px; }
.wa-btn { display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; background: #16a34a; color: #fff; text-decoration: none;
  padding: 9px 14px; border-radius: 10px; font-weight: 600; font-size: 14px; }
form { display: flex; gap: 8px; padding: 10px 12px; border-top: 1px solid #e5e7eb; background: #fff; }
textarea { flex: 1; resize: none; border: 1px solid #d1d5db; border-radius: 12px; padding: 9px 12px; font-size: 14px; height: 42px; max-height: 96px; color: #111827; }
.send { border: 0; background: #111827; color: #fff; border-radius: 12px; padding: 0 16px; font-weight: 600; cursor: pointer; font-size: 14px; }
.send:disabled { opacity: .5; cursor: not-allowed; }
.foot { font-size: 11px; color: #6b7280; text-align: center; padding: 0 12px 8px; background: #fff; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
@media (prefers-reduced-motion: reduce) { .launcher { transition: none; } }
`;

const BOT_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"/></svg>';

function track(event, params = {}) {
  try {
    if (typeof window.gtag === "function") window.gtag("event", event, { event_category: "bantubot", ...params });
  } catch {
    /* analytics must never break the widget */
  }
}

export function mountBantuBot(options = {}) {
  if (typeof document === "undefined") return null;
  if (document.getElementById("bantubot-root")) return null; // already mounted
  const cfg = { ...DEFAULTS, ...options };

  const host = document.createElement("div");
  host.id = "bantubot-root";
  const root = host.attachShadow({ mode: "open" });
  root.innerHTML = `
    <style>${STYLES}</style>
    <button class="launcher" type="button" aria-label="Buka chat ${cfg.botName}" aria-expanded="false" aria-controls="bb-panel">
      ${BOT_ICON}<span class="badge" aria-hidden="true"></span>
    </button>
    <section class="panel" id="bb-panel" role="dialog" aria-modal="false" aria-label="${cfg.botName} — asisten BantuBuatWeb" hidden>
      <header>
        ${BOT_ICON}
        <div class="title"><strong>${cfg.botName}</strong><small>Asisten AI · biasanya membalas instan</small></div>
        <a class="icon-btn wa-head" target="_blank" rel="noopener" aria-label="Chat admin via WhatsApp" title="Chat admin via WhatsApp">💬</a>
        <button class="icon-btn close" type="button" aria-label="Tutup chat">✕</button>
      </header>
      <div class="log" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="chips" role="group" aria-label="Pertanyaan populer"></div>
      <form>
        <label class="sr" for="bb-input">Ketik pertanyaan</label>
        <textarea id="bb-input" rows="1" maxlength="${cfg.maxInputChars}" placeholder="Tulis pertanyaan Anda…"></textarea>
        <button class="send" type="submit">Kirim</button>
      </form>
      <div class="foot">Jawaban AI bisa keliru. Untuk kepastian harga & jadwal, chat admin.</div>
    </section>`;
  document.body.appendChild(host);

  const $ = (sel) => root.querySelector(sel);
  const launcher = $(".launcher");
  const panel = $(".panel");
  const log = $(".log");
  const chips = $(".chips");
  const form = $("form");
  const input = $("textarea");
  const send = $(".send");
  const waHead = $(".wa-head");

  let kb = cfg.knowledgeBase || null;
  let history = [];
  let busy = false;
  let lastQuestion = "";
  let escalationShown = false;

  try {
    const saved = JSON.parse(sessionStorage.getItem(cfg.storageKey) || "null");
    if (saved && Array.isArray(saved.history)) history = sanitizeHistory(saved.history, cfg.maxHistory);
  } catch {
    /* storage unavailable (private mode) — run stateless */
  }
  const persist = () => {
    try {
      sessionStorage.setItem(cfg.storageKey, JSON.stringify({ history }));
    } catch {
      /* ignore */
    }
  };

  const phone = () => (kb && kb.contact && kb.contact.whatsapp) || cfg.whatsapp;
  const refreshHeaderLink = () => {
    waHead.href = buildWhatsAppUrl(phone(), { lastQuestion, page: location.pathname });
  };
  refreshHeaderLink();

  function addMessage(role, text) {
    const el = document.createElement("div");
    el.className = `msg ${role === "user" ? "user" : "bot"}`;
    el.textContent = text; // never innerHTML: model output is untrusted
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function addEscalationCard(intent, reason = "llm") {
    if (escalationShown) return;
    escalationShown = true;
    const card = document.createElement("div");
    card.className = "wa-card";
    const p = document.createElement("div");
    p.textContent = "Sepertinya Anda siap melangkah lebih jauh. Lanjutkan dengan admin kami di WhatsApp — riwayat pertanyaan Anda sudah kami siapkan.";
    const a = document.createElement("a");
    a.className = "wa-btn";
    a.target = "_blank";
    a.rel = "noopener";
    a.href = buildWhatsAppUrl(phone(), { lastQuestion, intent, page: location.pathname });
    a.textContent = "Lanjut chat di WhatsApp";
    a.addEventListener("click", () => track("bantubot_whatsapp_click", { source: "card", intent: intent || "" }));
    card.append(p, a);
    log.appendChild(card);
    log.scrollTop = log.scrollHeight;
    track("bantubot_escalation_shown", { reason, intent: intent || "" });
  }

  function renderChips() {
    chips.textContent = "";
    const faqs = (kb && kb.faq) || [];
    for (const f of faqs) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = f.chip;
      b.addEventListener("click", () => {
        // Chips are answered from the curated KB: instant, free, and exact.
        addMessage("user", f.question);
        addMessage("bot", f.answer);
        history = sanitizeHistory(
          [...history, { role: "user", content: f.question }, { role: "assistant", content: f.answer }],
          cfg.maxHistory,
        );
        lastQuestion = f.question;
        refreshHeaderLink();
        persist();
        track("bantubot_faq_chip", { faq_id: f.id });
      });
      chips.appendChild(b);
    }
    const wa = document.createElement("button");
    wa.type = "button";
    wa.className = "chip";
    wa.textContent = "💬 Chat admin (WhatsApp)";
    wa.addEventListener("click", () => {
      track("bantubot_whatsapp_click", { source: "chip" });
      window.open(buildWhatsAppUrl(phone(), { lastQuestion, page: location.pathname }), "_blank", "noopener");
    });
    chips.appendChild(wa);
  }

  async function loadKb() {
    if (kb) return kb;
    try {
      const res = await fetch(cfg.kbUrl, { credentials: "omit" });
      if (res.ok) kb = await res.json();
    } catch {
      /* chips degrade to the WhatsApp chip only */
    }
    return kb;
  }

  let initialised = false;
  async function initOnFirstOpen() {
    if (initialised) return;
    initialised = true;
    addMessage("bot", cfg.greeting);
    for (const m of history) addMessage(m.role, m.content);
    await loadKb();
    refreshHeaderLink();
    renderChips();
  }

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? `Tutup chat ${cfg.botName}` : `Buka chat ${cfg.botName}`);
    if (open) {
      initOnFirstOpen();
      input.focus();
      track("bantubot_open");
    } else {
      launcher.focus();
    }
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  $(".close").addEventListener("click", () => setOpen(false));
  waHead.addEventListener("click", () => track("bantubot_whatsapp_click", { source: "header" }));
  root.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) setOpen(false);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim().slice(0, cfg.maxInputChars);
    if (!text || busy) return;
    busy = true;
    send.disabled = true;
    input.value = "";
    lastQuestion = text;
    refreshHeaderLink();
    addMessage("user", text);
    const outgoing = sanitizeHistory([...history, { role: "user", content: text }], cfg.maxHistory);
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.textContent = `${cfg.botName} sedang mengetik…`;
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;
    track("bantubot_message_sent");

    let data = null;
    try {
      const res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ messages: outgoing, page: location.pathname }),
      });
      if (res.ok) data = await res.json();
      else if (res.status === 429)
        data = { reply: "Wah, pertanyaannya banyak sekali 😄 Mohon tunggu sebentar, atau langsung chat admin kami di WhatsApp.", escalate: true, intent: "" };
    } catch {
      /* handled below */
    }
    typing.remove();

    if (!data || typeof data.reply !== "string") {
      data = {
        reply: "Maaf, BantuBot sedang mengalami gangguan. Admin kami siap membantu langsung lewat WhatsApp.",
        escalate: true,
        intent: "",
      };
    }
    addMessage("bot", data.reply);
    history = sanitizeHistory([...outgoing, { role: "assistant", content: data.reply }], cfg.maxHistory);
    persist();
    if (data.escalate || detectEscalation(text)) addEscalationCard(data.intent || "", data.escalate ? "llm" : "keyword");

    busy = false;
    send.disabled = false;
    input.focus();
  });

  return {
    open: () => setOpen(true),
    close: () => setOpen(false),
    destroy: () => host.remove(),
  };
}

// Auto-mount when loaded via <script data-bantubot>. Deferred to idle time so the
// widget never competes with the page's LCP.
if (typeof document !== "undefined") {
  const tag = document.querySelector("script[data-bantubot]");
  if (tag) {
    const opts = {};
    if (tag.dataset.endpoint) opts.endpoint = tag.dataset.endpoint;
    if (tag.dataset.kb) opts.kbUrl = tag.dataset.kb;
    if (tag.dataset.whatsapp) opts.whatsapp = tag.dataset.whatsapp;
    const start = () => mountBantuBot(opts);
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    if (document.readyState === "complete") idle(start);
    else window.addEventListener("load", () => idle(start), { once: true });
  }
}
