import { HOME_FAQ, type HomeFaqItem } from '../../../app/data/homeData'

export default defineEventHandler((): HomeFaqItem[] => {
  try {
    return useDb().prepare('SELECT question AS q, answer AS a FROM faqs ORDER BY sort_order, id').all() as HomeFaqItem[]
  } catch (e) {
    // situs publik tetap tampil walau DB bermasalah
    console.error('[faqs] fallback ke data seed:', e)
    return HOME_FAQ
  }
})
