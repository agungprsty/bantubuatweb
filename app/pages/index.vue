<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '#imports'
import { PORTFOLIO } from '~/data/portfolio'

useHead({
  title: 'BantuBuatWeb | Jasa Pembuatan Website Professional & Digital Solution #1 Indonesia',
  link: [{ rel: 'canonical', href: 'https://bantubuatweb.com/' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://bantubuatweb.com/#business',
        name: 'BantuBuatWeb',
        url: 'https://bantubuatweb.com/',
        image: 'https://bantubuatweb.com/og-cover.svg',
        logo: 'https://bantubuatweb.com/favicon.svg',
        description: 'BantuBuatWeb: Jasa pembuatan website professional, company profile, toko online, landing page & aplikasi web modern di Indonesia. Desain modern, super cepat, SEO optimized & bergaransi.',
        telephone: '+6289686804015',
        email: 'halo@bantubuatweb.com',
        priceRange: 'Rp 1.500.000 - Rp 7.000.000',
        openingHours: 'Mo-Sa 08:00-21:00',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '150' },
        sameAs: [
          'https://www.instagram.com/bantubuatweb',
          'https://www.facebook.com/bantubuatweb',
          'https://www.linkedin.com/company/bantubuatweb',
        ],
        makesOffer: [
          { '@type': 'Offer', name: 'UMKM Starter', price: '1500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Company Profile', price: '3500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Toko Online E-Commerce', price: '7000000', priceCurrency: 'IDR' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Berapa lama proses pembuatan website di BantuBuatWeb?',
            acceptedAnswer: { '@type': 'Answer', text: 'Paket UMKM Starter dan Company Profile umumnya selesai dalam 5–10 hari kerja setelah materi disetujui. Toko online membutuhkan waktu sekitar 2–3 minggu.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah domain dan hosting sudah gratis?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ya! Semua paket kami sudah termasuk domain (.com / .id) dan hosting cepat SSD 1 tahun pertama gratis.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah website dijamin muncul di Google (SEO)?',
            acceptedAnswer: { '@type': 'Answer', text: 'Setiap website buatan BantuBuatWeb sudah dioptimasi SEO On-Page dasar dan didaftarkan ke Google Search Console agar langsung di-index oleh Google.' },
          },
          {
            '@type': 'Question',
            name: 'Apakah ada garansi jika hasil tidak sesuai?',
            acceptedAnswer: { '@type': 'Answer', text: 'Tentu saja! Kami memberikan Garansi 30 Hari Maintenance & Dukungan Teknis serta garansi kepuasan penuh.' },
          },
        ],
      }),
    },
  ],
})

const services = [
  {
    icon: 'code',
    title: 'Website Company Profile',
    desc: 'Bangun kredibilitas perusahaan & bisnis Anda dengan website bonafit berstandar internasional.',
    color: 'bg-neo-pink text-black',
    items: ['Hingga 10 Halaman Custom', 'Gratis Domain & Business Email', 'Optimasi SEO & Google Search'],
  },
  {
    icon: 'shoppingBag',
    title: 'Toko Online (E-Commerce)',
    desc: 'Platform jualan modern lengkap dengan pembayaran QRIS/Transfer & hitung ongkir otomatis.',
    color: 'bg-neo-yellow text-black',
    items: ['Integrasi Payment Gateway', 'Hitung Ongkir JNE/J&T/Sicepat', 'Manajemen Stok & Kupon Diskon'],
  },
  {
    icon: 'rocket',
    title: 'Landing Page High-Converting',
    desc: 'Halaman iklan super cepat untuk Google Ads & Meta Ads yang mengubah pengunjung jadi pembeli.',
    color: 'bg-neo-cyan text-black',
    items: ['Kecepatan Load di Bawah 2 Detik', 'Fokus Konversi & CTA WhatsApp', 'Tracking Meta Pixel & Google Analytics'],
  },
  {
    icon: 'smartphone',
    title: 'Aplikasi Web & Sistem Custom',
    desc: 'Sistem operasional internal: CRM, booking online, absensi, hingga dashboard manajemen custom.',
    color: 'bg-neo-green text-black',
    items: ['Disesuaikan dengan Alur Bisnis', 'Dashboard Realtime & Laporan PDF', 'Multi-User Hak Akses Berlapis'],
  },
]

const process = [
  { step: '01', title: 'Konsultasi & Strategi', desc: 'Diskusi gratis kebutuhan bisnis, target audience, dan fitur website yang dibutuhkan.' },
  { step: '02', title: 'Desain Wireframe', desc: 'Penyusunan tata letak (UI/UX) modern dan menarik dengan revisi sampai sesuai keinginan.' },
  { step: '03', title: 'Coding & Integrasi', desc: 'Pengembangan kode super cepat (Nuxt/Vue), responsif, dan terintegrasi sistem WhatsApp.' },
  { step: '04', title: 'Launch & Support', desc: 'Website diluncurkan, terdaftar di Google, dan didampingi garansi 30 hari penuh.' },
]

const plans = [
  {
    name: 'UMKM Starter',
    desc: 'Cocok untuk bisnis baru yang ingin tampil online secara profesional.',
    price: 'Rp 1,5jt',
    original: 'Rp 2.000.000',
    renewal: '+ Rp 800rb/tahun',
    cta: 'Pilih UMKM Starter',
    featured: false,
    color: 'bg-zinc-900 text-white border-zinc-700',
    perks: ['Gratis Domain .com / .id (1 Thn)', 'Hosting SSD High Speed', '3-5 Halaman Desain Premium', 'Tombol WhatsApp Direct', 'Setup Google Indexing'],
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
    perks: ['Bebas Request Fitur Sesuai Keinginan', 'Integrasi API External & Database', 'Arsitektur High-Scalability', 'Prioritas Maintenance & SLA', 'Training Penggunaan Sistem'],
  },
]

const portfolio = PORTFOLIO

const faq = [
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

const testimonials = [
  {
    name: 'Rian Hidayat',
    role: 'Founder E-Commerce, Jakarta',
    initial: 'R',
    quote: 'Desain website yang unik dari BantuBuatWeb membuat toko online saya tampil beda dan mencolok dibanding kompetitor! Konversi penjualan naik pesat.',
  },
  {
    name: 'Siti Aminah',
    role: 'Owner Skincare Brand, Bandung',
    initial: 'S',
    quote: 'Landing page iklan super cepat! Pas pasang Google Ads, leads masuk ke WhatsApp jauh lebih banyak karena loading cuma 1.5 detik.',
  },
  {
    name: 'Budi Kurniawan',
    role: 'Direktur PT. Perkasa Mandiri, Surabaya',
    initial: 'B',
    quote: 'Pengerjaan sangat profesional, pengerjaan cepat dan timnya komunikatif. Company profile baru kami membuat kami lebih percaya diri saat pitching ke klien besar.',
  },
]

const displayPortfolio = [...portfolio.slice(0, 6), ...portfolio.slice(0, 6), ...portfolio.slice(0, 6)]

const carouselRef = ref<HTMLElement | null>(null)
const isHovering = ref(false)
let autoTimer: ReturnType<typeof setInterval> | null = null
let resumeTimer: ReturnType<typeof setTimeout> | null = null

const getCardWidth = () => {
  const el = carouselRef.value
  const first = el?.firstElementChild as HTMLElement | null
  return (first?.offsetWidth ?? 320) + 20
}

const scrollCarousel = (dir: number) => {
  const el = carouselRef.value
  if (!el) return
  el.scrollBy({ left: dir * getCardWidth(), behavior: 'smooth' })
  pauseAuto()
}

const handleInfinite = () => {
  const el = carouselRef.value
  if (!el) return
  const w = getCardWidth()
  const setW = w * 6
  if (el.scrollLeft < setW * 0.5) {
    el.style.scrollBehavior = 'auto'
    el.scrollLeft += setW
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  } else if (el.scrollLeft > setW * 2.5) {
    el.style.scrollBehavior = 'auto'
    el.scrollLeft -= setW
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  }
}

const stopAuto = () => {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = null
}

const startAuto = () => {
  stopAuto()
  autoTimer = setInterval(() => {
    if (isHovering.value || document.hidden) return
    const el = carouselRef.value
    if (!el) return
    el.scrollBy({ left: getCardWidth(), behavior: 'smooth' })
  }, 3000)
}

const pauseAuto = () => {
  stopAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  resumeTimer = setTimeout(startAuto, 3500)
}

onMounted(() => {
  const el = carouselRef.value
  if (!el) return
  const init = () => {
    const w = getCardWidth()
    el.style.scrollBehavior = 'auto'
    el.scrollLeft = w * 6
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  }
  requestAnimationFrame(() => requestAnimationFrame(init))
  el.addEventListener('scroll', handleInfinite, { passive: true })
  startAuto()
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto()
    else startAuto()
  })
})

onBeforeUnmount(() => {
  stopAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  carouselRef.value?.removeEventListener('scroll', handleInfinite)
})
</script>

<template>
  <div class="bg-black text-white selection:bg-neo-pink selection:text-black">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden border-b-2 border-zinc-800 bg-black pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          
          <!-- Hero Text -->
          <div class="space-y-6 lg:col-span-7">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 rounded-full border-2 border-white bg-neo-yellow px-4 py-1.5 font-black text-xs uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#fff]">
              Jasa Pembuatan Website #1 Indonesia
            </div>

            <!-- Title with Fixed Highlight Line-Height Spacing -->
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.25] text-white">
              Website
              <span class="inline-block rounded-lg border-2 border-black bg-neo-pink px-3 py-1 text-black shadow-[4px_4px_0px_0px_#fff] align-baseline my-1">Cepat</span>
              &amp; High Converting Untuk Bisnis Anda.
            </h1>

            <p class="text-lg sm:text-xl font-bold leading-relaxed text-zinc-300 max-w-2xl">
              BantuBuatWeb membantu UMKM, Startup, dan Perusahaan membangun website profesional berstandar tinggi, super cepat dan SEO optimized, tanpa ribet &amp; bergaransi 30 hari.
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                :href="wa('Halo BantuBuatWeb, saya ingin konsultasi buat website untuk bisnis saya')"
                target="_blank"
                rel="noopener"
                class="neo-btn bg-neo-pink text-black px-8 py-4 text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff]"
              >
                <AppIcon name="whatsapp" class="mr-3 h-6 w-6" />
                Konsultasi WhatsApp Gratis
              </a>
              <a
                href="#harga"
                class="neo-btn bg-white text-black px-8 py-4 text-lg font-black shadow-[6px_6px_0px_0px_#fff] hover:bg-neo-yellow"
              >
                Lihat Paket &amp; Harga
              </a>
            </div>

            <!-- Value Highlights -->
            <div class="grid grid-cols-3 gap-3 pt-6 border-t-2 border-zinc-800">
              <div class="flex items-center gap-2">
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-green font-black text-xs text-black border border-black">✓</span>
                <span class="text-xs sm:text-sm font-extrabold text-zinc-300">Load &lt; 2 Detik</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-yellow font-black text-xs text-black border border-black">✓</span>
                <span class="text-xs sm:text-sm font-extrabold text-zinc-300">SEO Ready</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-neo-cyan font-black text-xs text-black border border-black">✓</span>
                <span class="text-xs sm:text-sm font-extrabold text-zinc-300">Garansi 30 Hari</span>
              </div>
            </div>
          </div>

          <!-- Hero Graphic Card -->
          <div class="relative lg:col-span-5">
            <div class="neo-box bg-white text-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#fff] border-2 border-white relative z-10">
              <div class="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                <div class="flex gap-2">
                  <span class="h-4 w-4 rounded-full bg-red-500 border border-black"></span>
                  <span class="h-4 w-4 rounded-full bg-yellow-400 border border-black"></span>
                  <span class="h-4 w-4 rounded-full bg-green-500 border border-black"></span>
                </div>
                <span class="text-xs font-black uppercase bg-black text-white px-3 py-1 rounded">bantubuatweb.com</span>
              </div>

              <div class="space-y-4">
                <div class="rounded-xl border-2 border-black bg-neo-pink p-5 shadow-[4px_4px_0px_0px_#000]">
                  <div class="text-xs font-black uppercase">Statistik Hasil</div>
                  <div class="text-3xl font-black text-black mt-1">+150% Konversi Sales</div>
                  <div class="text-xs font-bold text-slate-900 mt-1">Struktur UI didesain khusus untuk pertumbuhan omzet.</div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <div class="rounded-xl border-2 border-black bg-neo-yellow p-4 shadow-[3px_3px_0px_0px_#000]">
                    <div class="text-2xl font-black text-black">99.9%</div>
                    <div class="text-xs font-bold text-black">Performance Score</div>
                  </div>
                  <div class="rounded-xl border-2 border-black bg-neo-cyan p-4 shadow-[3px_3px_0px_0px_#000]">
                    <div class="text-2xl font-black text-black">24/7</div>
                    <div class="text-xs font-bold text-black">Fast Support</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-6 -right-6 h-20 w-20 rounded-2xl border-2 border-white bg-neo-green shadow-[4px_4px_0px_0px_#fff] z-0 hidden sm:block"></div>
            <div class="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl border-2 border-white bg-neo-purple shadow-[4px_4px_0px_0px_#fff] z-0 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="layanan" class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="neo-badge bg-neo-yellow text-black">SOLUSI DIGITAL BISNIS</span>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Layanan Utama Dari BantuBuatWeb
          </h2>
          <p class="text-base sm:text-lg font-bold text-zinc-400">
            Pilih jenis website yang sesuai dengan kebutuhan dan target pertumbuhan bisnis Anda.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(s, idx) in services"
            :key="idx"
            class="neo-box-interactive bg-white text-black p-6 flex flex-col justify-between"
          >
            <div>
              <div :class="['flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-6', s.color]">
                <AppIcon :name="s.icon" class="h-7 w-7 text-black" />
              </div>
              <h3 class="text-xl font-black text-black mb-3">{{ s.title }}</h3>
              <p class="text-sm font-bold text-slate-700 leading-relaxed mb-6">{{ s.desc }}</p>
              
              <ul class="space-y-2 border-t-2 border-black pt-4 mb-6">
                <li v-for="(item, i) in s.items" :key="i" class="flex items-start text-xs font-extrabold text-slate-900">
                  <span class="mr-2 text-black font-black">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <a
              :href="wa(`Halo BantuBuatWeb, saya tertarik dengan layanan ${s.title}`)"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-black text-white w-full py-2.5 text-sm font-black hover:bg-neo-pink hover:text-black"
            >
              Konsultasi Layanan
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 space-y-6">
            <span class="neo-badge bg-neo-pink text-black">KEUNGGULAN KAMI</span>
            <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Kenapa Harus Buat Website di BantuBuatWeb?
            </h2>
            <p class="text-base font-bold text-zinc-400 leading-relaxed">
              Kami tidak cuma buat website yang cantik, tapi kami mendesain aset digital berkinerja tinggi yang siap mendatangkan calon pelanggan bagi bisnis Anda.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-4 p-4 rounded-xl border-2 border-black bg-neo-yellow text-black shadow-[3px_3px_0px_0px_#fff]">
                <div>
                  <h4 class="font-black text-black">Load Super Cepat (High Performance)</h4>
                  <p class="text-xs font-bold text-slate-900 mt-1">Dikembangkan dengan arsitektur modern untuk kecepatan tinggi.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl border-2 border-black bg-neo-pink text-black shadow-[3px_3px_0px_0px_#fff]">
                <div>
                  <h4 class="font-black text-black">Tampil Beda &amp; Memorable</h4>
                  <p class="text-xs font-bold text-slate-900 mt-1">Tampil beda dan menonjol dari kompetitor dengan estetika modern.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-xl border-2 border-black bg-neo-cyan text-black shadow-[3px_3px_0px_0px_#fff]">
                <div>
                  <h4 class="font-black text-black">Garansi 30 Hari Maintenance</h4>
                  <p class="text-xs font-bold text-slate-900 mt-1">Garansi penuh perbaikan bug dan pendampingan teknis setelah website rilis.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- PROCESS STEPPER -->
          <div id="proses" class="lg:col-span-7 space-y-6">
            <div class="text-center lg:text-left mb-8">
              <span class="neo-badge bg-neo-green text-black">CARA BEKERJA</span>
              <h3 class="text-2xl sm:text-3xl font-black text-white mt-2">4 Langkah Mudah Website Anda Rilis</h3>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <div v-for="(p, idx) in process" :key="idx" class="neo-box bg-white text-black p-6 relative overflow-hidden">
                <span class="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-neo-yellow font-black text-xl text-black shadow-[2px_2px_0px_0px_#000]">
                  {{ p.step }}
                </span>
                <h4 class="text-lg font-black text-black mb-2 pr-10">{{ p.title }}</h4>
                <p class="text-xs font-bold text-slate-700 leading-relaxed">{{ p.desc }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PORTFOLIO SHOWCASE -->
    <section class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="neo-badge bg-neo-pink text-black">PORTOFOLIO KARYA</span>
            <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">Hasil Karya Terbaru Kami</h2>
          </div>
          <div class="flex items-center gap-3">
            <button
              @click="scrollCarousel(-1)"
              class="neo-btn bg-white text-black p-3 shadow-[3px_3px_0px_0px_#fff] hover:bg-neo-yellow"
              aria-label="Portofolio sebelumnya"
            >
              ←
            </button>
            <button
              @click="scrollCarousel(1)"
              class="neo-btn bg-white text-black p-3 shadow-[3px_3px_0px_0px_#fff] hover:bg-neo-yellow"
              aria-label="Portofolio berikutnya"
            >
              →
            </button>
          </div>
        </div>

        <!-- Carousel Track -->
        <div
          ref="carouselRef"
          class="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          <div
            v-for="(item, idx) in displayPortfolio"
            :key="idx"
            class="neo-box-interactive min-w-[300px] sm:min-w-[360px] max-w-[360px] snap-start bg-white text-black p-5 shrink-0 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="neo-badge bg-neo-cyan text-black text-[10px]">{{ item.tag }}</span>
                <span class="text-xs font-black text-green-700 bg-green-100 px-2 py-0.5 rounded border border-black">{{ item.result }}</span>
              </div>
              <h3 class="text-xl font-black text-black mb-2">{{ item.title }}</h3>
              <p class="text-xs font-bold text-slate-700 leading-relaxed mb-4">{{ item.desc }}</p>
            </div>
            
            <a
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-yellow text-black w-full py-2 text-xs font-black hover:bg-black hover:text-white"
            >
              Kunjungi Website ({{ item.domain }})
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING SECTION -->
    <section id="harga" class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="neo-badge bg-neo-green text-black">TRANSPARAN &amp; TANPA BIAYA TERSEBUNYI</span>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Pilihan Paket &amp; Harga Website</h2>
          <p class="text-base font-bold text-zinc-400">Semua paket sudah termasuk gratis domain, hosting cepat &amp; garansi 30 hari.</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(p, idx) in plans"
            :key="idx"
            :class="[
              'neo-box p-6 flex flex-col justify-between relative border-2',
              p.featured ? 'border-4 shadow-[8px_8px_0px_0px_#fff] ring-4 ring-white/20' : 'shadow-[4px_4px_0px_0px_#fff]',
              p.color
            ]"
          >
            <span v-if="p.badge" class="absolute -top-4 right-4 rounded-full border-2 border-black bg-neo-yellow px-3 py-1 font-black text-xs text-black shadow-[2px_2px_0px_0px_#000]">
              {{ p.badge }}
            </span>

            <div>
              <h3 class="text-2xl font-black">{{ p.name }}</h3>
              <p class="text-xs font-bold opacity-80 mt-1 mb-4 h-10">{{ p.desc }}</p>

              <div class="mb-6 border-b-2 border-current pb-4">
                <div class="text-3xl sm:text-4xl font-black">{{ p.price }}</div>
                <div v-if="p.original" class="text-xs font-extrabold opacity-60 line-through">{{ p.original }}</div>
                <div class="text-[11px] font-extrabold opacity-90 mt-1">{{ p.renewal }}</div>
              </div>

              <ul class="space-y-3 mb-8">
                <li v-for="(perk, i) in p.perks" :key="i" class="flex items-start text-xs font-extrabold">
                  <span class="mr-2 font-black">✓</span>
                  <span>{{ perk }}</span>
                </li>
              </ul>
            </div>

            <a
              :href="wa(`Halo BantuBuatWeb, saya mau pesan paket ${p.name}`)"
              target="_blank"
              rel="noopener"
              :class="[
                'neo-btn w-full py-3 text-sm font-black',
                p.featured ? 'bg-black text-white hover:bg-neo-yellow hover:text-black' : 'bg-neo-yellow text-black hover:bg-black hover:text-white'
              ]"
            >
              {{ p.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="neo-badge bg-neo-yellow text-black">KATA KLIEN KAMI</span>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Apa Kata Mereka Tentang BantuBuatWeb?</h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="(t, idx) in testimonials" :key="idx" class="neo-box bg-white text-black p-6 flex flex-col justify-between">
            <div class="space-y-4">
              <p class="text-sm font-bold text-slate-900 leading-relaxed italic">"{{ t.quote }}"</p>
            </div>

            <div class="flex items-center gap-3 pt-6 border-t-2 border-black mt-6">
              <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-neo-pink font-black text-black">
                {{ t.initial }}
              </div>
              <div>
                <div class="font-black text-sm text-black leading-none">{{ t.name }}</div>
                <div class="text-xs font-bold text-slate-700 mt-0.5">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <span class="neo-badge bg-neo-pink text-black">FAQ &amp; PERTANYAAN</span>
          <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Pertanyaan Yang Sering Diajukan</h2>
        </div>

        <div class="space-y-6">
          <div v-for="(f, idx) in faq" :key="idx" class="neo-box bg-white text-black p-6">
            <h3 class="text-lg font-black text-black mb-2 flex items-center gap-3">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-black bg-neo-yellow text-xs font-black">Q</span>
              <span>{{ f.q }}</span>
            </h3>
            <p class="text-sm font-bold text-slate-700 leading-relaxed pl-10 border-l-2 border-black ml-3 pt-1">
              {{ f.a }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA BANNER -->
    <section class="bg-zinc-950 py-16 sm:py-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="neo-box bg-neo-yellow text-black p-8 sm:p-14 text-center border-4 shadow-[10px_10px_0px_0px_#fff] relative overflow-hidden">
          <h2 class="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
            Siap Memiliki Website Professional Berkelas Indonesia?
          </h2>
          <p class="text-base sm:text-lg font-bold text-black mt-4 max-w-2xl mx-auto">
            Konsultasikan kebutuhan bisnis Anda secara gratis dengan tim ahli kami sekarang. Dapatkan penawaran terbaik hari ini!
          </p>
          <div class="pt-8">
            <a
              :href="wa('Halo BantuBuatWeb, saya mau konsultasi buat website')"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-pink text-black px-10 py-5 text-xl font-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000]"
            >
              <AppIcon name="whatsapp" class="mr-3 h-7 w-7" />
              Konsultasi WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
