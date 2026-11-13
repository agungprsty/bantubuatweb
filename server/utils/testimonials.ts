function rating(v: unknown, required: boolean) {
  if (!v) {
    if (required) throw createError({ statusCode: 400, statusMessage: 'Rating wajib diisi' })
    return null
  }
  const r = int(v, 'Rating')
  if (r < 1 || r > 5) throw createError({ statusCode: 400, statusMessage: 'Rating harus 1 sampai 5' })
  return r
}

// Input admin (manual / edit)
export function parseTestimonial(b: any) {
  b ??= {}
  const status = oneOf(b.status ?? 'pending', Object.keys(TESTIMONIAL_STATUS) as TestimonialStatus[], 'Status')
  const consent = b.consent ? 1 : 0
  if (status === 'disetujui' && !consent) {
    throw createError({ statusCode: 400, statusMessage: 'Testimoni hanya bisa disetujui jika klien sudah memberi izin publikasi' })
  }
  return {
    project_id: b.project_id ? assertProject(b.project_id) : null,
    name: text(b.name, 'Nama', { max: 80, required: true }),
    role: text(b.role, 'Jabatan & usaha', { max: 120 }) ?? '',
    rating: rating(b.rating, false),
    quote: text(b.quote, 'Isi testimoni', { max: 1000, required: true }),
    result: text(b.result, 'Hasil', { max: 120 }),
    tag: text(b.tag, 'Tag', { max: 60 }),
    status,
    featured: b.featured ? 1 : 0,
    sort_order: int(b.sort_order, 'Urutan'),
    consent,
  }
}

// Input klien dari form /testimoni/[token]
export function parseClientTestimonial(b: any) {
  b ??= {}
  const quote = text(b.quote, 'Testimoni', { max: 1000, required: true })!
  if (quote.length < 30) throw createError({ statusCode: 400, statusMessage: 'Testimoni minimal 30 karakter' })
  if (b.consent !== true) throw createError({ statusCode: 400, statusMessage: 'Mohon centang izin publikasi' })
  return {
    name: text(b.name, 'Nama', { max: 80, required: true }),
    role: text(b.role, 'Jabatan & nama usaha', { max: 120, required: true })!,
    rating: rating(b.rating, true),
    quote,
    result: text(b.result, 'Hasil', { max: 120 }),
  }
}
