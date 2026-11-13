// Proyek yang memakai paket ini tetap ada, kolom paketnya menjadi kosong (ON DELETE SET NULL)
export default defineEventHandler((event) => {
  assertFound(useDb().prepare('DELETE FROM plans WHERE id = ?').run(idParam(event)).changes)
  return { ok: true }
})
