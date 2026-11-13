export default defineEventHandler(() =>
  (useDb().prepare('SELECT * FROM plans ORDER BY sort_order, id').all() as {
    id: number, name: string, description: string, price: string, original: string | null, renewal: string, cta: string,
    featured: number, color: string, icon: string, badge: string | null, perks: string, sort_order: number
  }[]).map((p) => ({ ...p, perks: JSON.parse(p.perks) as string[] })),
)
