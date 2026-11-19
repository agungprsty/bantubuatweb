// Nuxt/Nitro route: POST /api/bantubot/chat
// Copy bantubot/server + bantubot/shared into the Nuxt project (see README), then
// set NUXT_BANTUBOT_ANTHROPIC_API_KEY and NUXT_BANTUBOT_ALLOWED_ORIGINS on the server.
import {
  FALLBACK_RESULT,
  HttpError,
  createBantuBot,
  createRateLimiter,
  isOriginAllowed,
  parseChatRequest,
} from "~~/bantubot/server/bantubot-core";

const limiter = createRateLimiter();
let chat: ReturnType<typeof createBantuBot> | null = null;

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig(event).bantubot as {
    anthropicApiKey?: string;
    model?: string;
    allowedOrigins?: string;
  };
  setResponseHeader(event, "Cache-Control", "no-store");

  const allowlist = (cfg.allowedOrigins || "https://www.bantubuat.web.id,https://bantubuat.web.id")
    .split(",")
    .map((o) => o.trim().replace(/\/$/, ""))
    .filter(Boolean);
  if (!isOriginAllowed(getRequestHeader(event, "origin"), allowlist)) {
    throw createError({ statusCode: 403, statusMessage: "origin not allowed" });
  }

  // nginx sets X-Forwarded-For; trust it only because Nitro sits behind our proxy.
  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  if (!limiter.check(ip)) throw createError({ statusCode: 429, statusMessage: "rate limited" });

  const length = Number(getRequestHeader(event, "content-length") || 0);
  if (length > 32_000) throw createError({ statusCode: 413, statusMessage: "payload too large" });

  let messages;
  try {
    messages = parseChatRequest(await readBody(event));
  } catch (err) {
    const status = err instanceof HttpError ? err.status : 400;
    throw createError({ statusCode: status, statusMessage: "invalid request" });
  }

  if (!cfg.anthropicApiKey) return FALLBACK_RESULT; // degrade to WhatsApp escalation
  chat ??= createBantuBot({ apiKey: cfg.anthropicApiKey, model: cfg.model || undefined });
  try {
    return await chat(messages);
  } catch (err) {
    console.error("[bantubot] upstream error", err instanceof Error ? err.message : err);
    return FALLBACK_RESULT;
  }
});
