export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // tanpa project_id = biaya umum
  const expense = { ...parseExpense(body), project_id: body?.project_id ? assertProject(body.project_id) : null }
  const { lastInsertRowid } = useDb().prepare(insertSql('expenses', expense)).run(expense)
  return { id: Number(lastInsertRowid) }
})
