export default defineEventHandler(() => {
  const db = useDb()

  // 12 bulan terakhir, waktu Indonesia (WIB = UTC+7)
  const months = db.prepare(`
    WITH RECURSIVE m(month, n) AS (
      SELECT strftime('%Y-%m', 'now', '+7 hours'), 0
      UNION ALL SELECT strftime('%Y-%m', month || '-01', '-1 month'), n + 1 FROM m WHERE n < 11
    )
    SELECT month,
      (SELECT COALESCE(SUM(amount), 0) FROM payments WHERE status = 'lunas' AND substr(paid_date, 1, 7) = month) AS income,
      (SELECT COALESCE(SUM(amount), 0) FROM expenses WHERE substr(date, 1, 7) = month) AS cost
    FROM m ORDER BY month DESC`).all() as { month: string, income: number, cost: number }[]

  const projects = (db.prepare(`SELECT p.service_slug, p.status, ${PROJECT_TOTALS} FROM projects p`).all() as
    { service_slug: string | null, status: ProjectStatus, net: number, received: number, scheduled: number, cost: number }[])
    .map(withTotals)
    .filter((p) => BILLABLE_STATUSES.includes(p.status))

  const byService = new Map<string | null, { slug: string | null, count: number, net: number, cost: number, margin: number }>()
  for (const p of projects) {
    const row = byService.get(p.service_slug) ?? { slug: p.service_slug, count: 0, net: 0, cost: 0, margin: 0 }
    row.count++
    row.net += p.net
    row.cost += p.cost
    row.margin += p.margin
    byService.set(p.service_slug, row)
  }

  const sum = (key: 'net' | 'received' | 'receivable') => projects.reduce((t, p) => t + p[key], 0)
  // semua biaya, termasuk proyek yang batal: uangnya tetap sudah keluar
  const cost = db.prepare(`SELECT COALESCE(SUM(amount), 0) AS total,
    COALESCE(SUM(CASE WHEN project_id IS NULL THEN amount END), 0) AS general FROM expenses`).get() as { total: number, general: number }

  return {
    totals: {
      contract: sum('net'),
      received: sum('received'),
      receivable: sum('receivable'),
      cost: cost.total,
      generalCost: cost.general,
    },
    months,
    byService: [...byService.values()].sort((a, b) => b.net - a.net),
  }
})
