export default defineEventHandler((event) => {
  assertFound(useDb().prepare('DELETE FROM testimonials WHERE id = ?').run(idParam(event)).changes)
  return { ok: true }
})
