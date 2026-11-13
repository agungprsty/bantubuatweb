export default defineEventHandler(async (event) => {
  rateLimit(event, 'login', 5, 15 * 60_000)

  const body = await readBody(event)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  const { adminEmail } = useRuntimeConfig(event)
  const passwordHash = adminPasswordHash(event)
  if (!adminEmail || !passwordHash) {
    throw createError({ statusCode: 500, statusMessage: 'Akun admin belum dikonfigurasi' })
  }

  // password tetap dicek walau email salah, supaya waktu respons tidak membocorkan email yang benar
  const passwordOk = password.length <= 256 && verifyPassword(password, passwordHash)
  if (email !== adminEmail.toLowerCase() || !passwordOk) {
    throw createError({ statusCode: 401, statusMessage: 'Email atau password salah' })
  }

  const session = await useAdminSession(event)
  await session.update({ email })
  return { email }
})
