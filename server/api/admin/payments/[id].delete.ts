export default defineEventHandler((event) => {
  assertFound(useDb().prepare('DELETE FROM payments WHERE id = ?').run(idParam(event)).changes)
  return { ok: true }
})
