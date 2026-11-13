export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const faq = parseFaq(await readBody(event))
  assertFound(useDb().prepare(updateSql('faqs', faq)).run({ ...faq, id }).changes)
  return { ok: true }
})
