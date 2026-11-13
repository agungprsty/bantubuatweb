import type { H3Event } from 'h3'

// shortcut: disimpan di memori, hanya benar untuk 1 proses (deploy/ecosystem.config.cjs). Pindah ke DB jika app jalan lebih dari 1 instance.
const hits = new Map<string, { count: number, resetAt: number }>()

// X-Real-IP selalu ditimpa Caddy dengan IP asli pengunjung (deploy/Caddyfile), dan Node hanya listen di localhost.
export function clientIp(event: H3Event) {
  return getRequestHeader(event, 'x-real-ip') || getRequestIP(event) || 'unknown'
}

export function rateLimit(event: H3Event, action: string, limit: number, windowMs: number) {
  const now = Date.now()
  if (hits.size > 10_000) {
    for (const [key, hit] of hits) if (hit.resetAt <= now) hits.delete(key)
  }
  const key = `${action}:${clientIp(event)}`
  let hit = hits.get(key)
  if (!hit || hit.resetAt <= now) hits.set(key, hit = { count: 0, resetAt: now + windowMs })
  if (++hit.count > limit) {
    setResponseHeader(event, 'retry-after', Math.ceil((hit.resetAt - now) / 1000))
    throw createError({ statusCode: 429, statusMessage: 'Terlalu banyak percobaan, coba lagi nanti' })
  }
}
