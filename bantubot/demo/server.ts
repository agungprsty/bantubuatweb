// Local demo: serves a mock BantuBuatWeb page with the widget and the chat API.
//   npm run demo                       -> mock mode (no API key, no spend)
//   ANTHROPIC_API_KEY=... npm run demo -> live Claude responses
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  type ChatResult,
  type ChatTurn,
  HttpError,
  createBantuBot,
  createRateLimiter,
  isOriginAllowed,
  parseChatRequest,
} from "../server/bantubot-core.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const port = Number(process.env.PORT || 4173);
const live = Boolean(process.env.ANTHROPIC_API_KEY) && process.env.BANTUBOT_MOCK !== "1";
const limiter = createRateLimiter();

async function mockChat(messages: ChatTurn[]): Promise<ChatResult> {
  const q = messages[messages.length - 1].content.toLowerCase();
  if (/pesan|order|admin|nego|diskon/.test(q))
    return { reply: "Siap! Admin kami akan bantu proses pemesanan Anda lewat WhatsApp.", escalate: true, intent: "Pesan website" };
  return { reply: `(mode demo) Anda bertanya: "${q}". Paket mulai Rp 2,5jt, gratis domain & hosting tahun pertama.`, escalate: false, intent: "" };
}
const chat = live ? createBantuBot({ apiKey: process.env.ANTHROPIC_API_KEY, model: process.env.BANTUBOT_MODEL }) : mockChat;

const files: Record<string, [string, string]> = {
  "/": ["demo/index.html", "text/html; charset=utf-8"],
  "/bantubot/bantubot.js": ["widget/bantubot.js", "text/javascript; charset=utf-8"],
  "/bantubot/knowledge-base.json": ["shared/knowledge-base.json", "application/json"],
};

createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  if (req.method === "POST" && url.pathname === "/api/bantubot/chat") {
    const send = (status: number, body: unknown) => {
      res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
      res.end(JSON.stringify(body));
    };
    if (!isOriginAllowed(req.headers.origin, [`http://localhost:${port}`, `http://127.0.0.1:${port}`])) return send(403, { error: "origin" });
    if (!limiter.check(req.socket.remoteAddress || "x")) return send(429, { error: "rate limited" });
    let raw = "";
    for await (const chunk of req) {
      raw += chunk;
      if (raw.length > 32_000) return send(413, { error: "too large" });
    }
    try {
      return send(200, await chat(parseChatRequest(JSON.parse(raw || "null"))));
    } catch (err) {
      return send(err instanceof HttpError ? err.status : 400, { error: "invalid request" });
    }
  }
  if (url.pathname === "/favicon.ico") {
    res.writeHead(204).end();
    return;
  }
  const file = files[url.pathname];
  if (!file) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "Content-Type": file[1] });
  res.end(await readFile(path.join(root, file[0])));
}).listen(port, () => console.log(`BantuBot demo (${live ? "live" : "mock"}) on http://localhost:${port}`));
