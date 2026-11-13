// Input manual (mis. testimoni yang diterima lewat WA)
export default defineEventHandler(async (event) => {
  const testimonial = { ...parseTestimonial(await readBody(event)), source: 'admin' }
  const { lastInsertRowid } = useDb().prepare(insertSql('testimonials', testimonial)).run(testimonial)
  return { id: Number(lastInsertRowid) }
})
