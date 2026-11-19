# ENH-001 — BantuBot AI Assistant & Interactive FAQ Widget

**Owner:** CTO · **Target:** https://www.bantubuat.web.id · **Status:** reference implementation built and tested locally; not yet deployed

## 1. Goal

Answer visitor questions around the clock and turn high-intent visitors into WhatsApp leads, without slowing the site. Success measures (GA4):

| Metric | Event | Target (first 30 days) |
|---|---|---|
| Widget engagement | `bantubot_open` / sessions | ≥ 5% |
| WhatsApp leads from bot | `bantubot_whatsapp_click` | ≥ 20/month |
| Self-served FAQ | `bantubot_faq_chip` | tracked (baseline) |
| Performance impact | Lighthouse mobile & desktop | stays > 90 |

## 2. Current state (checked 2026-11-19)

- The site is Nuxt (SSR) behind nginx/1.24 on Ubuntu, with GA4 `G-BV260BCP64`. No chat widget exists today.
- The site already uses `wa.me/6289686804015?text=…` CTAs, and its FAQ and pricing are public on the homepage. These became `shared/knowledge-base.json`.
- The site's source code is not in this workspace, so the integration is delivered as a drop-in package.

## 3. Architecture

```
Browser (Shadow DOM widget, 6 KB gzip, lazy at idle)
 ├─ FAQ chips ─────────────► answered locally from knowledge-base.json (no API cost)
 ├─ Free text ─ POST /api/bantubot/chat ─► Nitro route (same origin)
 │                                           ├─ Origin allowlist · per-IP rate limit · 32 KB cap
 │                                           ├─ schema validation / history sanitising
 │                                           └─ Claude Messages API (server-side key)
 │                                                system = rules + KB (prompt-cached)
 │                                                output = JSON {reply, escalate, intent}
 └─ Escalation ─► wa.me/6289686804015?text=<context: need, last question, page>
       triggered by: model `escalate=true` OR client intent regex OR API error/429
```

- **Model:** `claude-opus-5-5` at `effort: low`, `max_tokens` 2048, with structured JSON output and `fallbacks: "default"` (beta `server-side-fallback-2026-07-01`). If a safety classifier declines, the request re-runs on Anthropic's recommended fallback model. The model is set by `NUXT_BANTUBOT_MODEL`. Switching to a cheaper model such as `claude-haiku-4-5` is a cost decision for the CFO and the board.
- **Grounding:** the bot answers only from the knowledge base and escalates anything the KB doesn't cover, such as custom quotes, discounts or exact schedules. It never invents prices.
- **Degradation:** with no API key, an upstream error, a refusal or invalid JSON, the visitor gets a polite message and the WhatsApp card. The widget never dead-ends.

## 4. Files

| Path | Purpose |
|---|---|
| `widget/bantubot.js` | Embeddable widget (ES module, no dependencies, Shadow DOM, a11y, GA4 events) |
| `shared/knowledge-base.json` | Packages, prices, FAQ, contact. **Single source of truth.** Edit this when prices change. |
| `server/bantubot-core.ts` | Validation, rate limiter, origin check, system prompt, Claude call |
| `nuxt/server/api/bantubot/chat.post.ts` | Nitro route wrapper |
| `nuxt/plugins/bantubot.client.ts` | Mounts the widget at idle time on all pages except `/admin` |
| `nuxt/nuxt.config.snippet.ts` | Server-only runtime config |
| `demo/` | Local demo server (mock or live) and screenshots |
| `test/` | Unit tests (9) and browser E2E (desktop and mobile) |

## 5. Integration steps (Fullstack)

1. Copy `bantubot/` into the Nuxt repo root (`~~/bantubot`). Copy `nuxt/server/api/bantubot/chat.post.ts` to `server/api/bantubot/` and `nuxt/plugins/bantubot.client.ts` to `plugins/`.
2. Copy `shared/knowledge-base.json` to `public/bantubot/knowledge-base.json`, or add a build step that copies it so the two can't drift.
3. Merge `nuxt.config.snippet.ts`, then run `npm i @anthropic-ai/sdk@^1.10.0`.
4. Set the production env vars (DevOps): `NUXT_BANTUBOT_ANTHROPIC_API_KEY`, and optionally `NUXT_BANTUBOT_MODEL` and `NUXT_BANTUBOT_ALLOWED_ORIGINS`.
5. Confirm nginx forwards `X-Forwarded-For`, which the rate limiter relies on.

## 6. Security controls (for the Security audit)

- The API key is server-only (Nuxt `runtimeConfig`, not `public`) and is never sent to the browser.
- Untrusted text is rendered with `textContent` only. The E2E test injects an `<img onerror>` payload to prove this.
- Input controls: last user message ≤ 500 chars, history ≤ 12 turns × 2,000 chars, body ≤ 32 KB, and foreign roles (`system`) are dropped.
- Abuse controls: Origin allowlist (403) and per-IP limits of 8/min and 60/day (429). The limiter is in-memory, so it holds only on a single instance. If the site scales horizontally, move it to Redis.
- Prompt injection: the bot has no tools, no secrets and no private data, and its system prompt contains only public KB content. The worst case is an off-topic reply, and the reply is capped at 1,200 chars.
- Privacy: the bot does not ask for sensitive data, and chat history lives only in `sessionStorage`, cleared when the tab closes. Nothing is persisted server-side. The privacy policy needs one line saying chat text is processed by an AI provider (Anthropic).
- Spend controls: KB answers cost nothing, the system prompt is prompt-cached, effort is `low`, and the rate limits cap spend per IP. **A monthly spend limit must also be set on the Anthropic workspace.**

## 7. Verification done (2026-11-19)

- `tsc --noEmit`: clean (strict).
- `npm test`: 9/9 pass, covering validation, role stripping, size caps, origin, rate limit, output parsing, cache-stable prompt, escalation regex, WhatsApp URL and history sanitising.
- `npm run e2e` (Chrome, desktop 1366×800 and mobile 390×844): launcher, panel and ARIA state; chip answered without an API call; free text goes through the API; buying intent shows the WhatsApp card with prefilled context; XSS payload is inert; panel fits the viewport; Escape closes; zero console errors.
- Origin check returned 403 for `https://evil.example`. The 9th request within a minute returned 429.
- **Not yet verified:** live Claude responses (needs the production API key), Lighthouse on the real site, and real-device testing. These belong to the QA and DevOps subtasks below.

## 8. Delegation & release gates

| # | Owner | Task | Exit criteria |
|---|---|---|---|
| 1 | Fullstack Web Developer | Integrate per §5 into the site repo and open a PR | PR builds; widget visible on staging; hidden on `/admin` |
| 2 | AI Solutions Engineer | Live-key prompt QA: ≥ 30 real visitor questions (ID/EN, off-topic, injection attempts, pricing edge cases) | 0 invented prices; correct escalation on buying intent; cache hits > 0 (`cache_read_input_tokens`) |
| 3 | DevOps & Cloud Engineer | Store the key as a server secret, set the env vars, check nginx XFF, set the Anthropic spend cap, deploy to staging | Staging URL live; key absent from client bundle (`grep` the built `.output/public`) |
| 4 | Security & Compliance Engineer | SAST/SCA plus the §6 review | **Vulnerability Audit Report: PASSED, 0 critical / 0 high** |
| 5 | QA & Quality Reviewer | Cross-device E2E plus Lighthouse on staging | **Lighthouse > 90 mobile and desktop**; QA Acceptance Report passing |
| 6 | CTO | Release sign-off once gates 4 and 5 pass | Authorise DevOps to deploy to production |

Production deployment is **blocked** until gates 4 and 5 both pass.
