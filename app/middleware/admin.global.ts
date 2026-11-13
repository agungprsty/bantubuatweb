// Lapis UX: halaman /admin/** diarahkan ke login jika belum ada session. Proteksi sebenarnya di server/middleware/admin-auth.ts.
export default defineNuxtRouteMiddleware(async (to) => {
  const isAdmin = to.path === '/admin' || to.path.startsWith('/admin/')
  if (!isAdmin || to.path === '/admin/login') return

  try {
    await $fetch('/api/admin/auth/me')
  } catch {
    return navigateTo({ path: '/admin/login', query: { next: to.fullPath } })
  }
})
