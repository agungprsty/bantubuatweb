export default defineEventHandler((event) => {
  const row = useDb().prepare(`
    SELECT t.used_at, t.expires_at <= datetime('now') AS expired, p.title
    FROM testimonial_tokens t JOIN projects p ON p.id = t.project_id
    WHERE t.token = ?`).get(getRouterParam(event, 'token') ?? '') as
    { used_at: string | null, expired: number, title: string } | undefined

  if (!row) throw createError({ statusCode: 404, statusMessage: 'Link testimoni tidak ditemukan.' })
  if (row.used_at) throw createError({ statusCode: 410, statusMessage: 'Link ini sudah dipakai. Terima kasih atas testimoninya!' })
  if (row.expired) throw createError({ statusCode: 410, statusMessage: 'Link ini sudah kedaluwarsa. Silakan minta link baru ke tim kami.' })
  return { project: row.title }
})
