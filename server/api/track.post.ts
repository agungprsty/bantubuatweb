import { createHmac } from 'node:crypto'

// Analitik first-party. Tanpa IP mentah: pengunjung = HMAC(tanggal WIB + IP + UA), berganti tiap hari.
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|whatsapp/i
const UNTRACKED = /^\/(admin|testimoni)(\/|$)/
const clip = (v: unknown, max: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null)

function device(ua: string) {
  if (/ipad|tablet/i.test(ua)) return 'tablet'
  if (/mobi/i.test(ua)) return 'mobile'
  return /android/i.test(ua) ? 'tablet' : 'desktop'
}

export default defineEventHandler(async (event) => {
  rateLimit(event, 'track', 120, 60_000)
  setResponseStatus(event, 204)

  const ua = getRequestHeader(event, 'user-agent') ?? ''
  if (!ua || BOT.test(ua)) return null

  // sendBeacon mengirim string sebagai text/plain, jadi JSON di-parse sendiri
  const raw = (await readRawBody(event)) ?? ''
  if (raw.length > 2048) return null
  let b: any = null
  try { b = JSON.parse(raw) } catch {}
  const type = b?.type === 'pageview' || b?.type === 'wa_click' ? b.type : null
  const path = clip(b?.path, 200)
  if (!type || !path?.startsWith('/') || UNTRACKED.test(path)) return null

  const landing = type === 'pageview' && b.landing === true
  let referrer: string | null = null
  if (landing) {
    try {
      const host = new URL(b.referrer).hostname.replace(/^www\./, '')
      // dari situs sendiri bukan sumber trafik
      if (host && host !== getRequestHost(event).split(':')[0].replace(/^www\./, '')) referrer = host
    } catch {}
  }

  const day = new Date(Date.now() + 7 * 3600_000).toISOString().slice(0, 10)
  const visitorHash = createHmac('sha256', useRuntimeConfig(event).sessionPassword)
    .update(`${day}|${clientIp(event)}|${ua}`).digest('hex').slice(0, 16)

  const row = {
    type,
    path,
    referrer,
    utm_source: landing ? clip(b.utm_source, 100) : null,
    utm_medium: landing ? clip(b.utm_medium, 100) : null,
    utm_campaign: landing ? clip(b.utm_campaign, 100) : null,
    device: device(ua),
    label: type === 'wa_click' ? clip(b.label, 100) : null,
    visitor_hash: visitorHash,
    landing: landing ? 1 : 0,
  }
  useDb().prepare(insertSql('events', row)).run(row)
  return null
})
