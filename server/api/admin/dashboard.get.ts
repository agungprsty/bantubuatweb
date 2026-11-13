// Angka non-analitik untuk dashboard; analitik 30 hari diambil dari /api/admin/analytics
export default defineEventHandler(() => {
  const db = useDb()
  const projects = (db.prepare(`SELECT p.status, ${PROJECT_TOTALS} FROM projects p`).all() as
    { status: ProjectStatus, net: number, received: number, scheduled: number, cost: number }[]).map(withTotals)

  return {
    activeProjects: projects.filter((p) => ACTIVE_STATUSES.includes(p.status)).length,
    receivable: projects.reduce((t, p) => t + p.receivable, 0),
    pendingTestimonials: db.prepare(`SELECT COUNT(*) FROM testimonials WHERE status = 'pending'`).pluck().get() as number,
  }
})
