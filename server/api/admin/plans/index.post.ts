export default defineEventHandler(async (event) => {
  const plan = { ...parsePlan(await readBody(event)), sort_order: nextOrder('plans') }
  const { lastInsertRowid } = useDb().prepare(insertSql('plans', plan)).run(plan)
  return { id: Number(lastInsertRowid) }
})
