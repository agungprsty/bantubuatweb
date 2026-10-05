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
    desc: 'Bangun kredibilitas perusahaan & bisnis Anda dengan website bonafit berstandar internasional.',
    color: 'bg-neo-pink text-black',
    img: '/images/gumroad/side-project-1.svg',
    items: ['Hingga 10 Halaman Custom', 'Gratis Domain & Business Email', 'Optimasi SEO & Google Search'],
  },
  {
    icon: 'shoppingBag',
    title: 'Toko Online (E-Commerce)',
    desc: 'Platform jualan modern lengkap dengan pembayaran QRIS/Transfer & hitung ongkir otomatis.',
    color: 'bg-neo-yellow text-black',
    img: '/images/gumroad/sell-anywhere.png',
    items: ['Integrasi Payment Gateway', 'Hitung Ongkir JNE/J&T/Sicepat', 'Manajemen Stok & Kupon Diskon'],
  },
  {
    icon: 'rocket',
    title: 'Landing Page High-Converting',
    desc: 'Halaman iklan super cepat untuk Google Ads & Meta Ads yang mengubah pengunjung jadi pembeli.',
    color: 'bg-neo-cyan text-black',
    img: '/images/gumroad/side-project-2.svg',
    items: ['Kecepatan Load di Bawah 2 Detik', 'Fokus Konversi & CTA WhatsApp', 'Tracking Meta Pixel & Google Analytics'],
  },
  {
    icon: 'smartphone',
    title: 'Aplikasi Web & Sistem Custom',
    desc: 'Sistem operasional internal: CRM, booking online, absensi, hingga dashboard manajemen custom.',
    color: 'bg-neo-green text-black',
    img: '/images/gumroad/new-sale.svg',
    items: ['Disesuaikan dengan Alur Bisnis', 'Dashboard Realtime & Laporan PDF', 'Multi-User Hak Akses Berlapis'],
  },
]

export const HOME_PLANS: HomePlan[] = [
  {
    name: 'UMKM Starter',
    desc: 'Cocok untuk bisnis baru yang ingin tampil online secara profesional.',
    price: 'Rp 1,5jt',
    original: 'Rp 2.000.000',
    renewal: '+ Rp 800rb/tahun',
    cta: 'Pilih UMKM Starter',
    featured: false,
    color: 'bg-zinc-900 text-white border-zinc-700',
    icon: '/images/gumroad/feature-receipt-1.svg',
    perks: ['Gratis Domain .com (1 Thn)', 'Hosting SSD High Speed', '3-5 Halaman Desain Premium', 'Tombol WhatsApp Direct', 'Setup Google Indexing'],
  },
  {
    name: 'Company Profile',
    desc: 'Membangun kepercayaan klien & memperbesar peluang proyek.',
    price: 'Rp 3,5jt',
    original: 'Rp 4.500.000',
    badge: 'PALING POPULER',
    renewal: '+ Rp 1jt/tahun',
    cta: 'Pilih Company Profile',
    featured: true,
    color: 'bg-neo-pink text-black border-black',
    icon: '/images/gumroad/feature-receipt-2.svg',
    perks: ['Semua Fitur Starter', 'Unlimited Bandwidth & Storage', 'Hingga 10 Halaman Custom', 'Custom Email (@bisnisanda.com)', 'Garansi Maintenance 30 Hari'],
  },
  {
    name: 'Toko Online E-Commerce',
    desc: 'Solusi lengkap jualan online otomatis ke seluruh Indonesia.',
    price: 'Rp 7jt',
    original: 'Rp 9.000.000',
    renewal: '+ Rp 2,5jt/tahun',
    cta: 'Pilih Toko Online',
    featured: false,
    color: 'bg-neo-yellow text-black border-black',
    icon: '/images/gumroad/feature-receipt-3.svg',
    perks: ['Semua Fitur Pro', 'Keranjang Belanja Custom', 'Kalkulator Ongkir Otomatis', 'Payment Gateway (QRIS, VA, CC)', 'Manajemen Stok & Laporan'],
  },
  {
    name: 'Custom System / Enterprise',
    desc: 'Kebutuhan aplikasi web kompleks & alur bisnis khusus.',
    price: 'Custom',
    original: '',
    renewal: 'Biaya disesuaikan modul',
    cta: 'Konsultasi Enterprise',
    featured: false,
    color: 'bg-neo-cyan text-black border-black',
    icon: '/images/gumroad/feature-receipt-4.svg',
    perks: ['Bebas Request Fitur Sesuai Keinginan', 'Integrasi API External & Database', 'Arsitektur High-Scalability', 'Prioritas Maintenance & SLA', 'Training Penggunaan Sistem'],
  },
]

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    name: 'Rian Hidayat',
    role: 'Founder E-Commerce, Jakarta',
    avatar: '/images/gumroad/daniel-full.png',
    initial: 'R',
    quote: 'Desain website yang unik dari BantuBuatWeb membuat toko online saya tampil beda dan mencolok dibanding kompetitor! Konversi penjualan naik pesat.',
  },
  {
    name: 'Siti Aminah',
    role: 'Owner Skincare Brand, Bandung',
    avatar: '/images/gumroad/steph-full.png',
    initial: 'S',
    quote: 'Landing page iklan super cepat! Pas pasang Google Ads, leads masuk ke WhatsApp jauh lebih banyak karena loading cuma 1.5 detik.',
  },
  {
    name: 'Budi Kurniawan',
    role: 'Direktur PT. Perkasa Mandiri, Surabaya',
    avatar: '/images/gumroad/dru-full.png',
    initial: 'B',
    quote: 'Pengerjaan sangat profesional, pengerjaan cepat dan timnya komunikatif. Company profile baru kami membuat kami lebih percaya diri saat pitching ke klien besar.',
  },
]

export const HOME_FAQ: HomeFaqItem[] = [
  {
    q: 'Berapa lama proses pembuatan website di BantuBuatWeb?',
    a: 'Paket UMKM Starter dan Company Profile umumnya selesai dalam 5–10 hari kerja setelah materi disetujui. Toko online dengan fitur lengkap membutuhkan waktu sekitar 2–3 minggu.',
  },
  {
    q: 'Apakah domain dan hosting sudah gratis?',
    a: 'Ya! Semua paket kami sudah termasuk gratis domain (.com / .id) dan hosting SSD cepat untuk tahun pertama. Biaya perpanjangan tahunan sangat terjangkau & transparan.',
  },
  {
    q: 'Apakah website bisa diakses cepat di HP dan Laptop?',
    a: 'Pasti! Kami membangun website menggunakan teknologi modern (Nuxt/Vue) tanpa template berat, sehingga loading di bawah 2 detik di perangkat seluler maupun komputer.',
  },
  {
    q: 'Apakah BantuBuatWeb melayani klien dari seluruh Indonesia?',
    a: 'Ya! Kami melayani bisnis, UMKM, startup, dan perorangan dari seluruh Indonesia (Jakarta, Surabaya, Bandung, Medan, Makassar, Bali, Lampung, dsb) secara online via Zoom / WhatsApp.',
  },
  {
    q: 'Bagaimana dengan garansi setelah website selesai?',
    a: 'Setiap paket kami disertai Garansi 30 Hari Maintenance gratis untuk perbaikan error, pembaruan konten minor, dan pendampingan pengelolaan website.',
  },
]
