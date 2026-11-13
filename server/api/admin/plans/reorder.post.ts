export default defineEventHandler(async (event) => {
  reorder('plans', (await readBody(event))?.ids)
  return { ok: true }
})
