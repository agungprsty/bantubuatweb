export default defineEventHandler(() =>
  useDb().prepare(`
    SELECT t.id, t.project_id, p.title AS project_title, t.name, t.role, t.rating, t.quote, t.result, t.tag,
      t.status, t.featured, t.sort_order, t.source, t.consent, t.created_at
    FROM testimonials t LEFT JOIN projects p ON p.id = t.project_id
    ORDER BY t.status = 'pending' DESC, t.featured DESC, t.sort_order, t.id DESC`).all() as {
    id: number, project_id: number | null, project_title: string | null, name: string, role: string, rating: number | null,
    quote: string, result: string | null, tag: string | null, status: TestimonialStatus, featured: number,
    sort_order: number, source: 'admin' | 'form', consent: number, created_at: string
  }[],
)
