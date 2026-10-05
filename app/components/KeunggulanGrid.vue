<script setup lang="ts">
import { ref } from 'vue'

const features = [
  {
    id: 'speed',
    badge: 'SUPER FAST PERFORMANCE',
    stat: '< 1.5 Detik',
    statLabel: 'Average Load Time',
    title: 'Kecepatan Loading Super Cepat',
    desc: 'Dibangun dengan Nuxt 3 & Vite modern tanpa plugin WordPress yang berat. Website Anda terbuka secepat kilat, mencegah calon pelanggan kabur karena menunggu.',
    color: 'bg-neo-yellow text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/easy.svg',
    colSpan: 'lg:col-span-7',
    iconBg: 'bg-black text-neo-yellow',
  },
  {
    id: 'design',
    badge: 'HIGH CONVERTING UI/UX',
    stat: '+150%',
    statLabel: 'Potensi Omzet',
    title: 'Desain Unik & Menonjol',
    desc: 'Estetika Neo-Brutalism modern yang berani dan memorable. Membuang tampilan template biasa dan membuat bisnis Anda langsung mencuri perhatian.',
    color: 'bg-neo-pink text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/price-tag.svg',
    colSpan: 'lg:col-span-5',
    iconBg: 'bg-black text-neo-pink',
  },
  {
    id: 'seo',
    badge: 'GOOGLE SEARCH READY',
    stat: 'Rank #1',
    statLabel: 'SEO Optimized',
    title: 'Struktur SEO On-Page Lengkap',
    desc: 'Sudah dilengkapi Schema.org, Meta Tag, Sitemap XML, dan terdaftar di Google Search Console agar produk/jasa Anda mudah ditemukan di pencarian.',
    color: 'bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_#FF90E8]',
    img: '/images/gumroad/sales-graph.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-neo-cyan text-black',
  },
  {
    id: 'responsive',
    badge: 'PIXEL PERFECT ALL DEVICE',
    stat: '100%',
    statLabel: 'Mobile Friendly',
    title: 'Responsif Layar HP & Laptop',
    desc: 'Desain adaptif sempurna di layar iPhone, Android, Tablet, hingga Laptop monitor besar. Pengalaman pengguna terasa mulus di manapun.',
    color: 'bg-neo-cyan text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/blog-post-circle-1.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-cyan',
  },
  {
    id: 'guarantee',
    badge: 'GARANSI MAINTENANCE',
    stat: '30 Hari',
    statLabel: 'Dukungan Gratis',
    title: 'Garansi & Technical Support',
    desc: 'Garansi 30 hari penuh pasca-launching untuk pembaruan minor, perbaikan bug, dan pendampingan pengelolaan hingga Anda mahir menggunakannya.',
    color: 'bg-neo-green text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/thumbsup.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-green',
  },
  {
    id: 'cta',
    badge: 'DIRECT WHATSAPP CONVERSION',
    stat: '1-Click',
    statLabel: 'Fast Order CTA',
    title: 'Terintegrasi Sistem WhatsApp Direct',
    desc: 'Calon pembeli bisa langsung menghubungi atau memesan produk Anda melalui tombol WhatsApp otomatis yang telah terintegrasi di seluruh halaman.',
    color: 'bg-zinc-900 text-white border-2 border-white shadow-[6px_6px_0px_0px_#FFC901]',
    img: '/images/gumroad/new-sale.svg',
    colSpan: 'lg:col-span-12',
    iconBg: 'bg-neo-pink text-black',
  },
]

const activeTab = ref<'all' | 'speed' | 'conversion' | 'support'>('all')

const comparison = [
  {
    feature: 'Kecepatan Load (Speed)',
    us: '⚡ Under 1.5 Detik (Super Cepat)',
    them: '🐌 4-8 Detik (Lambat & Berat)',
    isBetter: true,
  },
  {
    feature: 'Estetika & Tampilan UI',
    us: '🎨 Custom Neo-Brutalism Unique',
    them: '📄 Template Pasaran / Pasrah',
    isBetter: true,
  },
  {
    feature: 'Optimasi SEO & Google',
    us: '🚀 Complete Schema & Meta Ready',
    them: '⚠️ Harus Beli Plugin Tambahan',
    isBetter: true,
  },
  {
    feature: 'Garansi Pasca Launching',
    us: '🛡️ 30 Hari Garansi Maintenance',
    them: '❌ Lepas Tangan Setelah Rilis',
    isBetter: true,
  },
]
</script>

<template>
  <div class="space-y-12">
    
    <!-- FEATURE BENTO GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- BENTO CARDS -->
      <div
        v-for="f in features"
        :key="f.id"
        :class="[
          'neo-box-interactive p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden',
          f.colSpan,
          f.color
        ]"
      >
        <!-- Top Badge & Stat -->
        <div>
          <div class="flex items-center justify-between gap-2 mb-6">
            <span
              :class="[
                'text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-black',
                f.id === 'cta' ? 'bg-neo-yellow text-black' : 'bg-black text-white'
              ]"
            >
              {{ f.badge }}
            </span>

            <div class="text-right">
              <span class="block text-xl sm:text-2xl font-black leading-none">{{ f.stat }}</span>
              <span class="text-[10px] font-bold uppercase opacity-80 mt-0.5 block">{{ f.statLabel }}</span>
            </div>
          </div>

          <!-- Feature Image / Visual Illustration -->
          <div class="flex items-center justify-between gap-6 mb-6">
            <div class="space-y-2 max-w-lg">
              <h3 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                {{ f.title }}
              </h3>
              <p class="text-sm font-bold leading-relaxed opacity-90">
                {{ f.desc }}
              </p>
            </div>
            
            <div class="shrink-0 hidden sm:block">
              <img
                :src="f.img"
                class="h-24 sm:h-28 w-auto object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
                :alt="f.title"
              />
            </div>
          </div>
        </div>

        <!-- Bottom Action / Highlights -->
        <div class="pt-4 border-t-2 border-current/20 flex items-center justify-between">
          <span class="text-xs font-black uppercase tracking-wide flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-current"></span>
            Standar Kualitas BantuBuatWeb
          </span>
          <span class="text-xs font-mono font-bold">✓ VERIFIED</span>
        </div>

      </div>

    </div>

    <!-- COMPARISON TABLE: BANTUBUATWEB VS JASA KONVENSIONAL -->
    <div class="neo-box bg-white text-black p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0px_0px_#23C552]">
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="neo-badge bg-neo-green text-black">PERBANDINGAN KUALITAS</span>
        <h3 class="text-2xl sm:text-4xl font-black text-black mt-2">
          Mengapa BantuBuatWeb Jauh Lebih Unggul?
        </h3>
        <p class="text-xs sm:text-sm font-bold text-slate-700 mt-1">
          Bandingkan hasil pembuatan website kami dengan jasa konvensional biasa.
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b-2 border-black bg-zinc-100 text-black">
              <th class="p-3 text-xs sm:text-sm font-black uppercase">Fitur &amp; Standar</th>
              <th class="p-3 text-xs sm:text-sm font-black uppercase bg-neo-yellow text-black border-x-2 border-black">
                ✨ BantuBuatWeb
              </th>
              <th class="p-3 text-xs sm:text-sm font-black uppercase text-slate-500">
                Jasa Konvensional
              </th>
            </tr>
          </thead>
          <tbody class="divide-y-2 divide-black text-xs sm:text-sm font-bold">
            <tr v-for="(c, idx) in comparison" :key="idx" class="hover:bg-zinc-50">
              <td class="p-3 font-black text-slate-900">{{ c.feature }}</td>
              <td class="p-3 font-black bg-neo-yellow/30 text-black border-x-2 border-black">
                {{ c.us }}
              </td>
              <td class="p-3 text-slate-600 opacity-80">
                {{ c.them }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>
