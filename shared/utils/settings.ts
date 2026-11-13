// Pengaturan situs yang bisa diubah di admin. Nilai di sini = isi awal sebelum diubah,
// sekaligus cadangan saat DB tidak bisa dibaca. Meta di nuxt.config.ts tetap fallback terakhir.
export const SETTINGS_DEFAULTS = {
  wa_number: '6289686804015',
  wa_message: 'Halo BantuBuatWeb, saya ingin konsultasi pembuatan website',
  email: 'halo@bantubuat.web.id',
  address: 'Yogyakarta & Bandar Lampung',
  hours: '',
  instagram: 'https://www.instagram.com/bantubuatweb',
  facebook: 'https://www.facebook.com/bantubuatweb',
  linkedin: 'https://www.linkedin.com/company/bantubuatweb',
  seo_title: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Pembuatan Website #1 Indonesia',
  seo_description: 'BantuBuatWeb: Solusi transformasi digital & pembuatan website berkecepatan tinggi untuk menaikkan omzet bisnis. Layanan company profile, e-commerce, chatbot AI, integrasi LLM, payment gateway, dan advance SEO bergaransi.',
  seo_keywords: 'solusi transformasi digital, jasa pembuatan website, jasa buat website profesional, company profile perusahaan, toko online payment gateway, integrasi chatbot ai, integrasi llm openai, jasa advance seo, otomasi bisnis, bantubuatweb',
  og_image: '/og-cover.webp',
}
export type SiteSettings = typeof SETTINGS_DEFAULTS
