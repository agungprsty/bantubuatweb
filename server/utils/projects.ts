import { SERVICES } from '../../app/data/services'

const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

// Kolom angka per proyek; dipakai daftar, detail, dan rekap keuangan
export const PROJECT_TOTALS = `
  p.contract_value - p.discount AS net,
  (SELECT COALESCE(SUM(amount), 0) FROM payments WHERE project_id = p.id AND status = 'lunas') AS received,
  (SELECT COALESCE(SUM(amount), 0) FROM payments WHERE project_id = p.id) AS scheduled,
  (SELECT COALESCE(SUM(amount), 0) FROM expenses WHERE project_id = p.id) AS cost`

interface TotalsRow { status: string, net: number, received: number, cost: number }

// Satu-satunya tempat rumus piutang & margin
export function withTotals<T extends TotalsRow>(p: T) {
  const billable = BILLABLE_STATUSES.includes(p.status as ProjectStatus)
  const margin = p.net - p.cost
  return {
    ...p,
    receivable: billable ? Math.max(p.net - p.received, 0) : 0,
    margin,
    marginPct: p.net > 0 ? Math.round((margin / p.net) * 1000) / 10 : null,
  }
}

export function parseProject(b: any) {
  b ??= {}
  const isPublic = b.is_public ? 1 : 0
  const p = {
    title: text(b.title, 'Nama proyek', { max: 120, required: true }),
    client_name: text(b.client_name, 'Nama klien', { max: 120 }) ?? '',
    client_contact: text(b.client_contact, 'Kontak klien', { max: 120 }) ?? '',
    service_slug: b.service_slug ? oneOf(b.service_slug, SERVICE_SLUGS, 'Kategori layanan') : null,
    plan_id: b.plan_id ? int(b.plan_id, 'Paket') : null,
    status: oneOf(b.status ?? 'lead', Object.keys(PROJECT_STATUS) as ProjectStatus[], 'Status'),
    domain: text(b.domain, 'Domain', { max: 120 }),
    url: httpUrl(b.url, 'URL website'),
    start_date: date(b.start_date, 'Tanggal mulai'),
    due_date: date(b.due_date, 'Target selesai'),
    done_date: date(b.done_date, 'Tanggal selesai'),
    notes: text(b.notes, 'Catatan', { max: 5000 }) ?? '',
    contract_value: int(b.contract_value, 'Nilai kontrak'),
    discount: int(b.discount, 'Diskon'),
    is_public: isPublic,
    public_tag: text(b.public_tag, 'Tag portofolio', { max: 60, required: !!isPublic }),
    public_desc: text(b.public_desc, 'Deskripsi portofolio', { max: 400, required: !!isPublic }),
    public_result: text(b.public_result, 'Hasil proyek', { max: 120 }),
    public_image: imagePath(b.public_image, 'Gambar portofolio'),
    public_grad: b.public_grad ? oneOf(b.public_grad, PORTFOLIO_GRADIENTS, 'Warna portofolio') : PORTFOLIO_GRADIENTS[0],
    public_order: int(b.public_order, 'Urutan portofolio'),
  }
  if (p.discount > p.contract_value) throw createError({ statusCode: 400, statusMessage: 'Diskon melebihi nilai kontrak' })
  if (p.plan_id && !useDb().prepare('SELECT 1 FROM plans WHERE id = ?').get(p.plan_id)) {
    throw createError({ statusCode: 400, statusMessage: 'Paket tidak ditemukan' })
  }
  return p
}

export function parsePayment(b: any) {
  b ??= {}
  const status = oneOf(b.status ?? 'belum', Object.keys(PAYMENT_STATUS) as (keyof typeof PAYMENT_STATUS)[], 'Status termin')
  return {
    label: text(b.label, 'Nama termin', { max: 80, required: true }),
    amount: int(b.amount, 'Nominal'),
    due_date: date(b.due_date, 'Jatuh tempo'),
    // tanggal bayar hanya bermakna untuk termin lunas
    paid_date: status === 'lunas' ? date(b.paid_date, 'Tanggal bayar', true) : null,
    method: text(b.method, 'Metode bayar', { max: 60 }),
    status,
  }
}

export function parseExpense(b: any) {
  b ??= {}
  return {
    category: oneOf(b.category, Object.keys(EXPENSE_CATEGORY) as (keyof typeof EXPENSE_CATEGORY)[], 'Kategori biaya'),
    amount: int(b.amount, 'Nominal'),
    date: date(b.date, 'Tanggal', true),
    note: text(b.note, 'Catatan', { max: 300 }) ?? '',
  }
}

export function assertProject(id: unknown) {
  const n = int(id, 'Proyek')
  if (!useDb().prepare('SELECT 1 FROM projects WHERE id = ?').get(n)) {
    throw createError({ statusCode: 400, statusMessage: 'Proyek tidak ditemukan' })
  }
  return n
}

// Kolom berasal dari kode (bukan input user), aman disusun ke SQL
export const insertSql = (table: string, row: object) => {
  const cols = Object.keys(row)
  return `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${cols.map((c) => `@${c}`).join(', ')})`
}
export const updateSql = (table: string, row: object, extra = '') =>
  `UPDATE ${table} SET ${Object.keys(row).map((c) => `${c} = @${c}`).join(', ')}${extra} WHERE id = @id`
