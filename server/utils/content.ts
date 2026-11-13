// Paket harga & FAQ yang tampil di beranda

export function parsePlan(b: any) {
  b ??= {}
  const lines: unknown[] = Array.isArray(b.perks) ? b.perks : String(b.perks ?? '').split('\n')
  const perks = lines.map((p) => text(p, 'Fitur paket', { max: 120 })).filter(Boolean)
  if (perks.length > 20) throw createError({ statusCode: 400, statusMessage: 'Fitur paket maksimal 20 baris' })
  return {
    name: text(b.name, 'Nama paket', { max: 60, required: true }),
    description: text(b.description, 'Deskripsi', { max: 200 }) ?? '',
    price: text(b.price, 'Harga', { max: 40, required: true }),
    original: text(b.original, 'Harga coret', { max: 40 }),
    renewal: text(b.renewal, 'Perpanjangan', { max: 60 }) ?? '',
    cta: text(b.cta, 'Teks tombol', { max: 60 }) ?? '',
    featured: b.featured ? 1 : 0,
    color: oneOf(b.color, Object.keys(PLAN_COLORS) as (keyof typeof PLAN_COLORS)[], 'Warna kartu'),
    icon: imagePath(b.icon, 'Ikon') ?? '',
    badge: text(b.badge, 'Badge', { max: 30 }),
    perks: JSON.stringify(perks),
  }
}

export function parseFaq(b: any) {
  b ??= {}
  return {
    question: text(b.question, 'Pertanyaan', { max: 200, required: true }),
    answer: text(b.answer, 'Jawaban', { max: 2000, required: true }),
  }
}

// Data baru masuk di urutan paling akhir
export const nextOrder = (table: 'plans' | 'faqs') =>
  useDb().prepare(`SELECT COALESCE(MAX(sort_order) + 1, 0) FROM ${table}`).pluck().get() as number

// ids = urutan baru dari atas ke bawah
export function reorder(table: 'plans' | 'faqs', ids: unknown) {
  if (!Array.isArray(ids) || !ids.every((id) => Number.isSafeInteger(id))) {
    throw createError({ statusCode: 400, statusMessage: 'Urutan tidak valid' })
  }
  const db = useDb()
  const update = db.prepare(`UPDATE ${table} SET sort_order = ? WHERE id = ?`)
  db.transaction(() => ids.forEach((id, i) => update.run(i, id)))()
}
