import { randomBytes } from 'node:crypto'

// Link sekali pakai untuk klien, berlaku 30 hari
export default defineEventHandler((event) => {
  const id = idParam(event)
  const db = useDb()
  if (!db.prepare('SELECT 1 FROM projects WHERE id = ?').get(id)) {
    throw createError({ statusCode: 404, statusMessage: 'Proyek tidak ditemukan' })
  }
  const token = randomBytes(24).toString('base64url')
  const { expires_at } = db.prepare(`
    INSERT INTO testimonial_tokens (token, project_id, expires_at) VALUES (?, ?, datetime('now', '+30 days'))
    RETURNING expires_at`).get(token, id) as { expires_at: string }
  return { token, expires_at }
})
