export default defineEventHandler(async (event) => {
  rateLimit(event, 'testimoni', 10, 60 * 60_000)
  const body = await readBody(event)
  // honeypot: field tersembunyi yang hanya diisi bot. Balas sukses agar bot tidak mencoba lagi.
  if (body?.website) return { ok: true }

  const input = parseClientTestimonial(body)
  const db = useDb()
  db.transaction(() => {
    // tandai terpakai secara atomik: dua kiriman bersamaan tidak bisa sama-sama lolos
    const token = db.prepare(`
      UPDATE testimonial_tokens SET used_at = datetime('now')
      WHERE token = ? AND used_at IS NULL AND expires_at > datetime('now')
      RETURNING project_id`).get(getRouterParam(event, 'token') ?? '') as { project_id: number } | undefined
    if (!token) throw createError({ statusCode: 410, statusMessage: 'Link ini sudah dipakai atau kedaluwarsa.' })

    const tag = db.prepare('SELECT public_tag FROM projects WHERE id = ?').pluck().get(token.project_id) as string | null
    const testimonial = { ...input, project_id: token.project_id, tag, status: 'pending', source: 'form', consent: 1 }
    db.prepare(insertSql('testimonials', testimonial)).run(testimonial)
  })()
  return { ok: true }
})
