export default defineEventHandler(async (event) => {
  reorder('faqs', (await readBody(event))?.ids)
  return { ok: true }
})
