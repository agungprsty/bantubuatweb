export default defineEventHandler((event) => {
  const id = idParam(event)
  const db = useDb()
  const project = db.prepare(`SELECT p.*, ${PROJECT_TOTALS} FROM projects p WHERE p.id = ?`).get(id) as
    { status: ProjectStatus, net: number, received: number, scheduled: number, cost: number, [key: string]: any } | undefined
  if (!project) throw createError({ statusCode: 404, statusMessage: 'Proyek tidak ditemukan' })

  return {
    project: withTotals(project),
    payments: db.prepare('SELECT * FROM payments WHERE project_id = ? ORDER BY due_date IS NULL, due_date, id').all(id) as
      { id: number, label: string, amount: number, due_date: string | null, paid_date: string | null, method: string | null, status: 'belum' | 'lunas' }[],
    expenses: db.prepare('SELECT * FROM expenses WHERE project_id = ? ORDER BY date DESC, id DESC').all(id) as
      { id: number, category: string, amount: number, date: string, note: string }[],
  }
})
