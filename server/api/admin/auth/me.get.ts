export default defineEventHandler(async (event) => {
  const session = await useAdminSession(event)
  return { email: session.data.email }
})
