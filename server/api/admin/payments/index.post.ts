export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const payment = { ...parsePayment(body), project_id: assertProject(body?.project_id) }
  const { lastInsertRowid } = useDb().prepare(insertSql('payments', payment)).run(payment)
  return { id: Number(lastInsertRowid) }
})
