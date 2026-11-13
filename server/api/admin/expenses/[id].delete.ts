export default defineEventHandler((event) => {
  assertFound(useDb().prepare('DELETE FROM expenses WHERE id = ?').run(idParam(event)).changes)
  return { ok: true }
})
