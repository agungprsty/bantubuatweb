export default defineEventHandler((event) => {
  assertFound(useDb().prepare('DELETE FROM faqs WHERE id = ?').run(idParam(event)).changes)
  return { ok: true }
})
