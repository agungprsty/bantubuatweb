export interface HomeService {
  icon: string
  title: string
  desc: string
  color: string
  img: string
  items: string[]
}

export interface HomePlan {
  name: string
  desc: string
  price: string
  original?: string
  renewal: string
  cta: string
  featured: boolean
  color: string
  icon: string
  badge?: string
  perks: string[]
}

export interface HomeTestimonial {
  name: string
  role: string
  avatar: string
  initial: string
  quote: string
}

export interface HomeFaqItem {
  q: string
  a: string
}

export const HOME_SERVICES: HomeService[] = [
  {
    icon: 'code',
    title: 'Website Company Profile',
    desc: 'Tampilkan profil usaha, legalitas, dan karya proyek Anda secara rapi agar calon klien percaya saat mau transaksi atau tender.',
    color: 'bg-neo-pink text-black',
    img: '/images/gumroad/side-project-1.svg',
    items: ['Hingga 10 Halaman Informasi', 'Gratis Domain & Email Bisnis Resmi', 'Terdaftar di Google Search & Maps'],
  },
  {
    icon: 'shoppingBag',
    title: 'Toko Online & Payment Gateway',
    desc: 'Katalog produk modern dengan integrasi pembayaran otomatis (Midtrans/Xendit/QRIS) serta cek ongkir otomatis multi-ekspedisi.',
    color: 'bg-neo-yellow text-black',
    img: '/images/gumroad/sell-anywhere.png',
    items: ['Payment Gateway (QRIS, VA, E-Wallet)', 'Hitung Ongkir Otomatis (JNE/J&T/Sicepat)', 'Order via Web & Notifikasi WhatsApp'],
  },
  {
    icon: 'bot',
    title: 'Chatbot AI & Integrasi LLM',
    desc: 'Otomatisasi customer service dan sistem cerdas 24/7 menggunakan kecerdasan buatan (OpenAI/Claude) berbasis data bisnis Anda.',
    color: 'bg-neo-cyan text-black',
    img: '/images/gumroad/side-project-2.svg',
    items: ['Customer Service AI Responsif 24/7', 'Integrasi LLM & AI Generatif Cerdas', 'Auto Follow-up Prospek ke WhatsApp'],
  },
  {
    icon: 'layers',
    title: 'Transformasi Digital & Advance SEO',
    desc: 'Bangun ekosistem digital kustom sesuai alur bisnis: ranking Google nomor satu, CRM, dashboard analitik, dan integrasi API pihak ke-3.',
    color: 'bg-neo-green text-black',
    img: '/images/gumroad/new-sale.svg',
    items: ['Advance SEO & Schema Terstruktur', 'Integrasi API & Payment 3rd Party', 'Dashboard Real-Time & Otomasi Alur'],
  },
]

export const HOME_PLANS: HomePlan[] = [
  {
    name: 'UMKM Starter',
    desc: 'Cocok untuk usaha baru yang ingin langsung tampil rapi di internet.',
    price: 'Rp 1,5jt',
    original: 'Rp 2.000.000',
    renewal: '+ Rp 800rb/tahun',
    cta: 'Pilih UMKM Starter',
    featured: false,
    color: 'bg-zinc-900 text-white border-zinc-700',
    icon: '/images/gumroad/feature-receipt-1.svg',
    perks: ['Gratis Domain .com (1 Tahun)', 'Hosting Cepat & Stabil', '3-5 Halaman Informasi', 'Tombol WhatsApp Langsung', 'Pendaftaran ke Google Search'],
  },
  {
    name: 'Company Profile',
    desc: 'Untuk perusahaan atau usaha yang butuh tampil terpercaya di mata klien.',
    price: 'Rp 3,5jt',
    original: 'Rp 4.500.000',
    badge: 'PALING POPULER',
    renewal: '+ Rp 1jt/tahun',
    cta: 'Pilih Company Profile',
    featured: true,
    color: 'bg-neo-pink text-black border-black',
    icon: '/images/gumroad/feature-receipt-2.svg',
    perks: ['Semua Fitur Starter', 'Kapasitas Penyimpanan Bebas', 'Hingga 10 Halaman Informasi', 'Email Resmi (@namausaha.com)', 'Setup Advance SEO & Schema', 'Garansi Pemeliharaan 30 Hari'],
  },
  {
    name: 'Toko Online E-Commerce',
    desc: 'Untuk jualan produk secara online dengan pembayaran dan ongkir otomatis.',
    price: 'Rp 7jt',
    original: 'Rp 9.000.000',
    renewal: '+ Rp 2,5jt/tahun',
    cta: 'Pilih Toko Online',
    featured: false,
    color: 'bg-neo-yellow text-black border-black',
    icon: '/images/gumroad/feature-receipt-3.svg',
    perks: ['Semua Fitur Pro', 'Keranjang Belanja Custom', 'Integrasi Payment Midtrans/Xendit', 'API Ongkir Otomatis (JNE/J&T/Sicepat)', 'Kelola Stok & Laporan Penjualan'],
  },
  {
    name: 'Custom System / Enterprise',
    desc: 'Sistem web atau aplikasi khusus sesuai alur operasional bisnis Anda.',
    price: 'Custom',
    original: '',
    renewal: 'Biaya disesuaikan modul',
    cta: 'Konsultasi Enterprise',
    featured: false,
    color: 'bg-neo-cyan text-black border-black',
    icon: '/images/gumroad/feature-receipt-4.svg',
    perks: ['Fitur Bebas Request Sesuai Alur', 'Chatbot AI & Integrasi LLM Cerdas', 'Integrasi API & Payment 3rd Party', 'Otomasi Workflow CRM & WhatsApp API', 'Pendampingan Teknis Prioritas'],
  },
]

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    name: 'Rian Hidayat',
    role: 'Pemilik Toko Online, Jakarta',
    avatar: '/images/gumroad/daniel-full.png',
    initial: 'R',
    quote: 'Tampilan websitenya beda dari yang lain, rapi dan enak dibaca dari HP. Pembeli yang tanya-tanya ke WhatsApp jadi jauh lebih banyak.',
  },
  {
    name: 'Siti Aminah',
    role: 'Pemilik Brand Skincare, Bandung',
    avatar: '/images/gumroad/steph-full.png',
    initial: 'S',
    quote: 'Buka websitenya cepat banget pas dipasang iklan Google Ads. Orang nggak pakai nunggu lama langsung masuk chat WA.',
  },
  {
    name: 'Budi Kurniawan',
    role: 'Direktur PT. Perkasa Mandiri, Surabaya',
    avatar: '/images/gumroad/dru-full.png',
    initial: 'B',
    quote: 'Pengerjaannya cepat dan timnya enak diajak diskusi. Website company profile baru bikin perusahaan kami lebih pede pas ketemu calon klien.',
  },
]

export const HOME_FAQ: HomeFaqItem[] = [
  {
    q: 'Berapa lama proses pembuatan website di BantuBuatWeb?',
    a: 'Paket UMKM Starter dan Company Profile umumnya selesai dalam 5–10 hari kerja setelah materi disetujui. Toko online atau sistem custom membutuhkan waktu sekitar 2–3 minggu.',
  },
  {
    q: 'Apakah domain dan hosting sudah gratis?',
    a: 'Ya, semua paket sudah termasuk gratis domain (.com / .id) dan hosting cepat untuk tahun pertama. Biaya perpanjangan tahun berikutnya juga transparan tanpa biaya tersembunyi.',
  },
  {
    q: 'Apakah website cepat dibuka dari HP?',
    a: 'Pasti. Kami membuat website dengan kode bersih tanpa template berat, sehingga loading di bawah 2 detik baik di HP maupun komputer.',
  },
  {
    q: 'Apakah BantuBuatWeb melayani klien dari luar kota?',
    a: 'Ya, kami melayani klien dari seluruh Indonesia secara online melalui WhatsApp, telepon, atau Google Meet.',
  },
  {
    q: 'Bagaimana jika ada kendala setelah website selesai?',
    a: 'Setiap pembuatan website sudah dilengkapi Garansi Pemeliharaan 30 Hari gratis untuk perbaikan jika ada kendala, update materi minor, dan panduan penggunaan.',
  },
]
