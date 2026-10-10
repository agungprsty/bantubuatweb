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
  project?: string
  result?: string
  tag?: string
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
    name: 'Starter Bisnis',
    desc: 'Landing page berkecepatan tinggi & siap konversi untuk produk atau layanan Anda.',
    price: 'Rp 2,5jt',
    original: 'Rp 3.500.000',
    renewal: '+ Rp 800rb/tahun',
    cta: 'Pilih Starter Bisnis',
    featured: false,
    color: 'bg-zinc-900 text-white border-zinc-700',
    icon: '/images/gumroad/feature-receipt-1.svg',
    perks: [
      'Gratis Domain .com & Cloud Server (1 Tahun)',
      '1-5 Bagian Halaman Siap Konversi',
      'Optimasi Kecepatan Kilat',
      'Integrasi Tombol WhatsApp',
      'Pendaftaran Google Search & Google Maps',
      'Garansi Pemeliharaan 30 Hari',
    ],
  },
  {
    name: 'Company Profile',
    desc: 'Website multi-halaman profesional untuk membangun kredibilitas, tender & closing klien.',
    price: 'Rp 4,9jt',
    original: 'Rp 6.500.000',
    badge: 'PALING POPULER',
    renewal: '+ Rp 1,2jt/tahun',
    cta: 'Pilih Company Profile',
    featured: true,
    color: 'bg-neo-pink text-black border-black',
    icon: '/images/gumroad/feature-receipt-2.svg',
    perks: [
      'Semua Fitur Starter Bisnis',
      'Hingga 10 Halaman Informasi Lengkap',
      'Email Bisnis Resmi (@namausaha.com)',
      'Setup Basic SEO',
      'Desain Custom Eksklusif',
      'Setup Google Analytics & Search Console',
      'Garansi Pemeliharaan 30 Hari',
    ],
  },
  {
    name: 'Toko Online & Payment',
    desc: 'Mesin jualan online otomatis: checkout instan, payment gateway resmi & cek ongkir kurir.',
    price: 'Rp 10jt',
    original: 'Rp 12.000.000',
    renewal: '+ Rp 2jt/tahun',
    cta: 'Pilih Toko Online',
    featured: false,
    color: 'bg-neo-yellow text-black border-black',
    icon: '/images/gumroad/feature-receipt-3.svg',
    perks: [
      'Semua Fitur Company Profile',
      'Integrasi Payment Midtrans/Xendit (QRIS, VA)',
      'Integrasi API Ongkir Multi-Ekspedisi Otomatis',
      'Katalog Produk & Manajemen Stok Real-Time',
      'Notifikasi Otomatis WhatsApp ke Pembeli & Admin',
      'Dashboard Laporan Penjualan Terpadu',
      'Garansi Pendampingan Teknis',
      'Garansi Pemeliharaan 60 Hari',
    ],
  },
  {
    name: 'Custom System / Integrasi AI',
    desc: 'Transformasi digital menyeluruh: integrasi AI, CRM, aplikasi web khusus & otomatisasi alur.',
    price: 'Custom',
    original: '',
    renewal: 'SLA & Cloud Terkelola',
    cta: 'Konsultasi Enterprise',
    featured: false,
    color: 'bg-neo-cyan text-black border-black',
    icon: '/images/gumroad/feature-receipt-4.svg',
    perks: [
      'Arsitektur Web & Database Custom Bebas Request',
      'Integrasi Chatbot AI & LLM Cerdas (OpenAI/Claude)',
      'Otomasi Workflow CRM',
      'WhatsApp Business API',
      'Integrasi API Pihak ke-3',
      'Sistem Internal',
      'Dashboard Analitik',
      'Manajemen Multi-Level Akses',
      'SLA Dedicated & Pendampingan Teknis Prioritas',
      'Free Training & Documentation',
    ],
  },
]

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    name: 'Hendra Wijaya',
    role: 'Founder Krakatau Roastery, Lampung',
    project: 'Krakatau Roastery',
    tag: 'Toko Online & Payment Gateway',
    result: 'Omzet Naik 3x Lipat',
    avatar: '/images/gumroad/blog-post-circle-1.svg',
    initial: 'H',
    quote: 'Integrasi payment gateway Midtrans dan cek ongkir otomatisnya benar-benar mengubah cara kami jualan kopi online. Pembeli langsung bayar via QRIS atau VA detik itu juga. Omzet online kami naik 3x lipat dalam 6 bulan tanpa ribet cek mutasi rekening manual.',
  },
  {
    name: 'Dewi Anggraeni',
    role: 'Owner Harmoni Dewi Spa, Yogyakarta',
    project: 'Harmoni Dewi Spa',
    tag: 'Spa & Wellness',
    result: 'Booking WA +40%',
    avatar: '/images/gumroad/crafts.svg',
    initial: 'D',
    quote: 'Dulu info paket pijat cuma kami share lewat status WhatsApp. Setelah dibuatkan website modern dan super cepat oleh BantuBuatWeb, calon klien dari hotel dan perumahan di Jogja langsung percaya. Booking masuk WhatsApp naik 40% dan terapis kami selalu full jadwal.',
  },
  {
    name: 'Ir. Bambang Sugiarto',
    role: 'Direktur PT. Konstruksi Lampung Jaya',
    project: 'PT. Konstruksi Lampung Jaya',
    tag: 'Company Profile & Tender',
    result: '+45 Proyek Tender Dimenangkan',
    avatar: '/images/gumroad/design.svg',
    initial: 'B',
    quote: 'Website company profile baru ini bikin kredibilitas perusahaan kami naik drastis di mata klien korporat dan panitia tender. Dokumentasi 120+ proyek dan sertifikasi legalitas tertata sangat rapi, cepat dibuka dari HP maupun laptop saat presentasi.',
  },
  {
    name: 'Fajar Pratama',
    role: 'Creator & Founder SiPalingSpill',
    project: 'SiPalingSpill',
    tag: 'Affiliate Shop & Web Speed',
    result: 'CTR Affiliate Tembus 12%',
    avatar: '/images/gumroad/animation.svg',
    initial: 'F',
    quote: 'Hub affiliate saya sebelumnya lambat dan sering bikin followers mental sebelum beli. Dibangun ulang oleh BantuBuatWeb dengan tampilan Neo-Brutalism yang estetik dan loading kilat < 1 detik. Hasilnya CTR klik link Shopee Affiliate saya melonjak tembus 12%!',
  },
  {
    name: 'dr. Amanda Putri',
    role: 'Head Clinic Glow Aesthetic, Jakarta',
    project: 'Glow Aesthetic Clinic',
    tag: 'Sistem Booking & CS Otomasi',
    result: '1.200+ Reservasi Online/Tahun',
    avatar: '/images/gumroad/blog-post-circle-2.svg',
    initial: 'A',
    quote: 'Sistem booking jadwal dokter online dan notifikasi pengingat WhatsApp otomatisnya memangkas 70% beban kerja resepsionis kami. Pasien sangat puas karena proses reservasi berlangsung cepat dan tidak perlu menunggu antrean konfirmasi manual.',
  },
  {
    name: 'Rian Kurnia',
    role: 'Owner RentCar Bandar Lampung',
    project: 'RentCar Bandar Lampung',
    tag: 'Landing Page & Ads Conversion',
    result: 'Biaya Per Lead Turun 40%',
    avatar: '/images/gumroad/software.svg',
    initial: 'R',
    quote: 'Landing page iklan Google Ads dan Meta Ads yang dirancang tim BantuBuatWeb sangat tajam dan to-the-point. Pengunjung yang klik iklan langsung masuk chat WhatsApp dengan form rental siap closing, membuat biaya iklan kami jauh lebih efisien.',
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
