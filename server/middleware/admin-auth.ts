// Lapis wajib: semua /api/admin/** butuh session, kecuali login.
export default defineEventHandler(async (event) => {
  // router men-decode path (/api/%61dmin → /api/admin), jadi cek harus pada path yang sudah di-decode
  let path: string
  try {
    path = decodeURIComponent(getRequestURL(event).pathname).toLowerCase()
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Path tidak valid' })
  }
  if (!path.startsWith('/api/admin') || path === '/api/admin/auth/login') return

  const session = await useAdminSession(event)
  if (!session.data.email) throw createError({ statusCode: 401, statusMessage: 'Belum login' })
})
