import type { H3Event } from 'h3'

export function useAdminSession(event: H3Event) {
  const password = useRuntimeConfig(event).sessionPassword
  if (password.length < 32) {
    throw createError({ statusCode: 500, statusMessage: 'NUXT_SESSION_PASSWORD belum di-set (minimal 32 karakter)' })
  }
  return useSession<{ email?: string }>(event, {
    name: 'bb_admin',
    password,
    maxAge: 60 * 60 * 24 * 7,
    cookie: { httpOnly: true, secure: !import.meta.dev, sameSite: 'lax', path: '/' },
  })
}
