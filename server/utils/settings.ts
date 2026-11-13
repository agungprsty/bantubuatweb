import type { H3Event } from 'h3'

const KEYS = Object.keys(SETTINGS_DEFAULTS) as (keyof SiteSettings)[]
const invalid = (message: string) => createError({ statusCode: 400, statusMessage: message })

export function getSettings(): SiteSettings {
  const rows = useDb().prepare(`SELECT key, value FROM settings WHERE key IN (${KEYS.map(() => '?').join(', ')})`)
    .all(...KEYS) as { key: keyof SiteSettings, value: string }[]
  const settings = { ...SETTINGS_DEFAULTS }
  for (const r of rows) settings[r.key] = JSON.parse(r.value)
  return settings
}

export function saveSettings(values: Record<string, unknown>) {
  const db = useDb()
  const upsert = db.prepare(`
    INSERT INTO settings (key, value, updated_at) VALUES (?, ?, datetime('now'))
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`)
  db.transaction(() => {
    for (const [key, value] of Object.entries(values)) upsert.run(key, JSON.stringify(value))
  })()
}

export function parseSettings(b: any): SiteSettings {
  b ??= {}
  const digits = String(b.wa_number ?? '').replace(/\D/g, '')
  const wa = digits.startsWith('0') ? `62${digits.slice(1)}` : digits
  if (!/^62\d{8,13}$/.test(wa)) throw invalid('Nomor WhatsApp tidak valid (contoh: 0812xxxx atau 62812xxxx)')
  const email = text(b.email, 'Email', { max: 120, required: true })!
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw invalid('Email tidak valid')

  return {
    wa_number: wa,
    wa_message: text(b.wa_message, 'Pesan default WhatsApp', { max: 300, required: true })!,
    email,
    address: text(b.address, 'Alamat', { max: 200 }) ?? '',
    hours: text(b.hours, 'Jam operasional', { max: 120 }) ?? '',
    instagram: httpUrl(b.instagram, 'Instagram') ?? '',
    facebook: httpUrl(b.facebook, 'Facebook') ?? '',
    linkedin: httpUrl(b.linkedin, 'LinkedIn') ?? '',
    seo_title: text(b.seo_title, 'Judul SEO', { max: 90, required: true })!,
    seo_description: text(b.seo_description, 'Deskripsi SEO', { max: 300, required: true })!,
    seo_keywords: text(b.seo_keywords, 'Keywords', { max: 500 }) ?? '',
    og_image: imagePath(b.og_image, 'Gambar OG') ?? SETTINGS_DEFAULTS.og_image,
  }
}

// Password admin: hash di DB (hasil ganti password) diutamakan, hash di env hanya untuk awal
export function adminPasswordHash(event: H3Event) {
  const stored = useDb().prepare(`SELECT value FROM settings WHERE key = 'admin_password_hash'`).pluck().get() as string | undefined
  return stored ? (JSON.parse(stored) as string) : useRuntimeConfig(event).adminPasswordHash
}
