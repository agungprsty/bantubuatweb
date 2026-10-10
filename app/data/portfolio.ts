export interface PortfolioItem {
  tag: string
  grad: string
  title: string
  domain: string
  url: string
  image?: string | null
  desc: string
  result: string
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    tag: 'Aplikasi Web',
    grad: 'from-rose-500/80 to-pink-600/80',
    title: 'Kanikah',
    domain: 'kanikah.my.id',
    url: 'https://kanikah.my.id/',
    image: '/images/portfolio/kanikah.webp',
    desc: 'Ruang kerja digital & wedding planner untuk pasangan: sinkronisasi tugas real-time, kalkulator anggaran & DP vendor, hingga manajemen buku tamu & RSVP katering.',
    result: '500+ Pasangan Terbantu',
  },
  {
    tag: 'Spa & Wellness',
    grad: 'from-rose-400/80 to-fuchsia-500/80',
    title: 'Harmoni Dewi Spa',
    domain: 'harmonidewispa.com',
    url: 'https://harmonidewispa.com/',
    image: '/images/portfolio/harmonidewispa.webp',
    desc: 'Website jasa pijat panggilan & spa 24 jam di Jogja ke hotel, rumah & kos: katalog layanan lengkap, formulir booking cepat ke WhatsApp, dan info terapis tersertifikasi.',
    result: 'Booking via WA +40%',
  },
  {
    tag: 'Affiliate Shop',
    grad: 'from-pink-400/80 to-amber-500/80',
    title: 'SiPalingSpill',
    domain: 'sipalingspill.vercel.app',
    url: 'https://sipalingspill.vercel.app/',
    image: '/images/portfolio/sipalingspill.webp',
    desc: 'Link hub affiliate aestetik: kurasi 20+ produk Shopee pilihan dengan card, harga, dan tombol spill ke marketplace super ringan dan cepat.',
    result: 'CTR affiliate 12%',
  },
  {
    tag: 'Undangan Digital',
    grad: 'from-violet-400/80 to-indigo-500/80',
    title: 'Fani & Agung Wedding',
    domain: 'faniagung-wedding.vercel.app',
    url: 'https://faniagung-wedding.vercel.app/',
    image: '/images/portfolio/faniagung-wedding.webp',
    desc: 'Undangan pernikahan digital elegan: cover, profil mempelai, countdown, detail akad-resepsi, RSVP, ucapan, dan amplop digital.',
    result: '180+ ucapan & RSVP',
  },
  {
    tag: 'Company Profile',
    grad: 'from-amber-400/80 to-orange-500/80',
    title: 'PT. Konstruksi Lampung Jaya',
    domain: 'konstruksilampungjaya.co.id',
    url: 'https://konstruksilampungjaya.co.id',
    desc: 'Website kontraktor dengan galeri 120+ proyek, sertifikat, dan form estimasi biaya yang diintegrasikan ke WhatsApp.',
    result: '+45 proyek tender dalam setahun',
  },
  {
    tag: 'Toko Online',
    grad: 'from-emerald-400/80 to-teal-600/80',
    title: 'Krakatau Roastery',
    domain: 'krakatauroastery.com',
    url: 'https://krakatauroastery.com',
    desc: 'E-commerce biji kopi Lampung dengan keranjang, pembayaran QRIS/BCA, dan ongkir otomatis JNE & J&T.',
    result: '3× omzet online dalam 6 bulan',
  },
  {
    tag: 'Sistem Booking',
    grad: 'from-violet-400/80 to-indigo-600/80',
    title: 'Glow Aesthetic Clinic',
    domain: 'glowclinic.id',
    url: 'https://glowclinic.id',
    desc: 'Website klinik kecantikan dengan booking jadwal dokter online dan pengingat WhatsApp otomatis.',
    result: '1.200+ reservasi online/tahun',
  },
  {
    tag: 'Toko Online',
    grad: 'from-sky-400/80 to-blue-600/80',
    title: 'Batik Khatulistiwa',
    domain: 'batikkhatulistiwa.com',
    url: 'https://batikkhatulistiwa.com',
    desc: 'Toko online batik khas Lampung. Stok, kupon diskon, dan laporan penjualan dikelola sendiri oleh pemilik.',
    result: '1.800+ produk terjual online',
  },
  {
    tag: 'Landing Page',
    grad: 'from-rose-400/80 to-pink-600/80',
    title: 'RentCar Bandar Lampung',
    domain: 'rentcarlampung.com',
    url: 'https://rentcarlampung.com',
    desc: 'Landing page iklan Google + Meta dengan form pemesanan 1 langkah dan tracking konversi penuh.',
    result: 'CPA turun 40% dari iklan',
  },
  {
    tag: 'System Aplikasi',
    grad: 'from-teal-400/80 to-cyan-600/80',
    title: 'Klinik Sehati',
    domain: 'sehati-medical.com',
    url: 'https://sehati-medical.com',
    desc: 'Sistem rekam medis digital dan manajemen antrean pasien untuk jaringan klinik di Bandar Lampung.',
    result: '5.000+ pasien terdaftar',
  },
]
