// ?umum=1 → hanya biaya tanpa proyek
export default defineEventHandler((event) => {
  const onlyGeneral = getQuery(event).umum === '1'
  return useDb().prepare(`
    SELECT e.*, p.title AS project_title
    FROM expenses e LEFT JOIN projects p ON p.id = e.project_id
    ${onlyGeneral ? 'WHERE e.project_id IS NULL' : ''}
    ORDER BY e.date DESC, e.id DESC`).all() as
    { id: number, project_id: number | null, project_title: string | null, category: string, amount: number, date: string, note: string }[]
})
