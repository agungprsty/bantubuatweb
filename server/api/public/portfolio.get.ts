import { PORTFOLIO, type PortfolioItem } from '../../../app/data/portfolio'

export default defineEventHandler(() => {
  try {
    return useDb().prepare(`
      SELECT COALESCE(public_tag, '') AS tag, COALESCE(public_grad, '') AS grad, title,
        COALESCE(domain, '') AS domain, COALESCE(url, '') AS url, public_image AS image,
        COALESCE(public_desc, '') AS "desc", COALESCE(public_result, '') AS result
      FROM projects WHERE is_public = 1
      ORDER BY public_order, id`).all() as PortfolioItem[]
  } catch (e) {
    // situs publik tetap tampil walau DB bermasalah
    console.error('[portfolio] fallback ke data seed:', e)
    return PORTFOLIO
  }
})
