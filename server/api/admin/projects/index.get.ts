// shortcut: semua proyek dikirim sekaligus & difilter di browser; tambah paginasi jika sudah ribuan proyek
export default defineEventHandler(() => {
  const rows = useDb().prepare(`
    SELECT p.id, p.title, p.client_name, p.service_slug, p.status, p.due_date, p.is_public, ${PROJECT_TOTALS}
    FROM projects p
    ORDER BY p.updated_at DESC, p.id DESC`).all() as {
    id: number, title: string, client_name: string, service_slug: string | null, status: ProjectStatus,
    due_date: string | null, is_public: number, net: number, received: number, scheduled: number, cost: number
  }[]
  return rows.map(withTotals)
})
