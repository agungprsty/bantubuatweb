import type Database from 'better-sqlite3'
import { HOME_FAQ, HOME_PLANS, HOME_TESTIMONIALS } from '../../app/data/homeData'
import { PORTFOLIO } from '../../app/data/portfolio'

// Data awal dari file TS yang sudah ada, apa adanya. Jalan sekali sebagai langkah migrasi.
export function seed(db: Database.Database) {
  const plan = db.prepare(`
    INSERT INTO plans (name, description, price, original, renewal, cta, featured, color, icon, badge, perks, sort_order)
    VALUES (@name, @desc, @price, @original, @renewal, @cta, @featured, @color, @icon, @badge, @perks, @order)`)
  HOME_PLANS.forEach((p, order) => plan.run({
    ...p,
    original: p.original ?? null,
    badge: p.badge ?? null,
    featured: p.featured ? 1 : 0,
    perks: JSON.stringify(p.perks),
    order,
  }))

  const project = db.prepare(`
    INSERT INTO projects (client_name, title, status, domain, url, is_public,
      public_tag, public_desc, public_result, public_image, public_grad, public_order)
    VALUES (@title, @title, 'selesai', @domain, @url, 1, @tag, @desc, @result, @image, @grad, @order)`)
  PORTFOLIO.forEach((p, order) => project.run({ ...p, image: p.image ?? null, order }))

  const projectId = db.prepare('SELECT id FROM projects WHERE title = ?').pluck()
  const testimonial = db.prepare(`
    INSERT INTO testimonials (project_id, name, role, quote, result, avatar, initial, tag,
      status, sort_order, source, consent)
    VALUES (@projectId, @name, @role, @quote, @result, @avatar, @initial, @tag,
      'disetujui', @order, 'admin', 1)`)
  HOME_TESTIMONIALS.forEach((t, order) => testimonial.run({
    ...t,
    projectId: (t.project && projectId.get(t.project)) ?? null,
    result: t.result ?? null,
    tag: t.tag ?? null,
    order,
  }))

  const faq = db.prepare('INSERT INTO faqs (question, answer, sort_order) VALUES (?, ?, ?)')
  HOME_FAQ.forEach((f, order) => faq.run(f.q, f.a, order))
}
