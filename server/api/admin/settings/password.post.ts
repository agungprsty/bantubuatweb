export default defineEventHandler(async (event) => {
  rateLimit(event, 'password', 5, 15 * 60_000)
  const body = await readBody(event)
  const current = typeof body?.current === 'string' ? body.current : ''
  const next = typeof body?.next === 'string' ? body.next : ''

  if (current.length > 256 || !verifyPassword(current, adminPasswordHash(event))) {
    throw createError({ statusCode: 400, statusMessage: 'Password lama salah' })
  }
  if (next.length < 12 || next.length > 256) {
    throw createError({ statusCode: 400, statusMessage: 'Password baru minimal 12 karakter' })
  }
  saveSettings({ admin_password_hash: hashPassword(next) })
  return { ok: true }
})
