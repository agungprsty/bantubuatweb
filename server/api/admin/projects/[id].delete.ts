import { SqliteError } from 'better-sqlite3'

export default defineEventHandler((event) => {
  const id = idParam(event)
  try {
    assertFound(useDb().prepare('DELETE FROM projects WHERE id = ?').run(id).changes)
  } catch (e) {
    // termin pembayaran sengaja menahan penghapusan (riwayat uang masuk tidak boleh hilang tanpa sengaja)
    if (e instanceof SqliteError && e.code === 'SQLITE_CONSTRAINT_FOREIGNKEY') {
      throw createError({ statusCode: 409, statusMessage: 'Proyek masih punya termin pembayaran. Hapus termin dulu, atau ubah status ke Batal.' })
    }
    throw e
  }
  return { ok: true }
})
