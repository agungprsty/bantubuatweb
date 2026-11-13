export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const plan = parsePlan(await readBody(event))
  assertFound(useDb().prepare(updateSql('plans', plan)).run({ ...plan, id }).changes)
  return { ok: true }
})
