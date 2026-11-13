export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const payment = parsePayment(await readBody(event))
  assertFound(useDb().prepare(updateSql('payments', payment)).run({ ...payment, id }).changes)
  return { ok: true }
})
