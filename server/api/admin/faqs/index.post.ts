export default defineEventHandler(async (event) => {
  const faq = { ...parseFaq(await readBody(event)), sort_order: nextOrder('faqs') }
  const { lastInsertRowid } = useDb().prepare(insertSql('faqs', faq)).run(faq)
  return { id: Number(lastInsertRowid) }
})
