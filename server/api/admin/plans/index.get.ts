// Pilihan paket di form proyek. Kelola paket ada di Pengaturan (Fase 4).
export default defineEventHandler(() =>
  useDb().prepare('SELECT id, name FROM plans ORDER BY sort_order, id').all() as { id: number, name: string }[],
)
