export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const expense = parseExpense(await readBody(event))
  assertFound(useDb().prepare(updateSql('expenses', expense)).run({ ...expense, id }).changes)
  return { ok: true }
})
