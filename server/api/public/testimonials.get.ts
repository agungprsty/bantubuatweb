import { HOME_TESTIMONIALS } from '../../../app/data/homeData'

interface PublicTestimonial {
  name: string, role: string, tag: string | null, quote: string, result: string | null, rating: number | null, project: string | null
}

export default defineEventHandler((): PublicTestimonial[] => {
  try {
    return useDb().prepare(`
      SELECT t.name, t.role, t.tag, t.quote, t.result, t.rating, p.title AS project
      FROM testimonials t LEFT JOIN projects p ON p.id = t.project_id
      WHERE t.status = 'disetujui' AND t.consent = 1
      ORDER BY t.featured DESC, t.sort_order, t.id DESC`).all() as PublicTestimonial[]
  } catch (e) {
    // situs publik tetap tampil walau DB bermasalah
    console.error('[testimonials] fallback ke data seed:', e)
    return HOME_TESTIMONIALS.map((t) => ({
      name: t.name, role: t.role, tag: t.tag ?? null, quote: t.quote, result: t.result ?? null, rating: null, project: t.project ?? null,
    }))
  }
})
