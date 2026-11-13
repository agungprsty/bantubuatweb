export default defineEventHandler(() =>
  useDb().prepare('SELECT * FROM faqs ORDER BY sort_order, id').all() as { id: number, question: string, answer: string, sort_order: number }[],
)
