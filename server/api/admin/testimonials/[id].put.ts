export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const testimonial = parseTestimonial(await readBody(event))
  assertFound(useDb().prepare(updateSql('testimonials', testimonial)).run({ ...testimonial, id }).changes)
  return { ok: true }
})
