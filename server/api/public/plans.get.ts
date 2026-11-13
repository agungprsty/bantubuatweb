import { HOME_PLANS, type HomePlan } from '../../../app/data/homeData'

export default defineEventHandler((): HomePlan[] => {
  try {
    return (useDb().prepare(`
      SELECT name, description AS "desc", price, original, renewal, cta, featured, color, icon, badge, perks
      FROM plans ORDER BY sort_order, id`).all() as (Omit<HomePlan, 'featured' | 'perks'> & { featured: number, perks: string })[])
      .map((p) => ({ ...p, original: p.original ?? undefined, badge: p.badge ?? undefined, featured: !!p.featured, perks: JSON.parse(p.perks) }))
  } catch (e) {
    // situs publik tetap tampil walau DB bermasalah
    console.error('[plans] fallback ke data seed:', e)
    return HOME_PLANS
  }
})
