<script setup lang="ts">
const features = [
  {
    id: 'speed',
    badge: 'PERFORMA ULTRA CEPAT',
    stat: '< 1.2 Detik',
    statLabel: 'Loading Time Instan',
    title: 'Arsitektur Web Cepat & High Conversion',
    desc: 'Dibangun dengan Nuxt 4 tanpa template lambat. Loading instan meningkatkan retensi pengunjung, menaikkan ranking Google, dan memaksimalkan konversi penjualan.',
    color: 'bg-neo-yellow text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/easy.svg',
    colSpan: 'lg:col-span-7',
    iconBg: 'bg-black text-neo-yellow',
  },
  {
    id: 'design',
    badge: 'BRANDING & AUTHORITY',
    stat: 'High-Trust',
    statLabel: 'Desain Khas & Unik',
    title: 'Desain Khas',
    desc: 'Estetika visual modern yang berani. Membuang kesan template pasaran agar bisnis Anda tampil kredibel di hadapan klien dan calon mitra.',
    color: 'bg-neo-pink text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/price-tag.svg',
    colSpan: 'lg:col-span-5',
    iconBg: 'bg-black text-neo-pink',
  },
  {
    id: 'seo',
    badge: 'DOMINASI PENCARIAN GOOGLE',
    stat: 'Organik #1',
    statLabel: 'Advance SEO & Schema',
    title: 'Advance SEO & GEO',
    desc: 'Optimasi Core Web Vitals, Schema JSON-LD lengkap, dan Local SEO Google Maps agar bisnis Anda mendatangkan leads organik tanpa terus bergantung pada iklan.',
    color: 'bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_#FF90E8]',
    img: '/images/gumroad/sales-graph.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-neo-cyan text-black',
  },
  {
    id: 'ai-automation',
    badge: 'AI & OTOMASI CERDAS',
    stat: '24/7 CS AI',
    statLabel: 'Integrasi LLM & WhatsApp',
    title: 'Chatbot AI & Asisten CS 24 Jam',
    desc: 'Asisten AI cerdas berbasis LLM yang menjawab pertanyaan produk, filter leads, dan follow-up prospek secara instan tanpa jeda saat admin offline.',
    color: 'bg-neo-cyan text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/blog-post-circle-1.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-cyan',
  },
  {
    id: 'payment-logistics',
    badge: 'TRANSAKSI OTOMATIS',
    stat: 'Midtrans & Kurir',
    statLabel: 'Auto Webhook & AWB',
    title: 'Payment Gateway & Cek Ongkir',
    desc: 'Integrasi QRIS, Virtual Account Midtrans/Xendit, serta cek ongkir multi-ekspedisi real-time. Transaksi terverifikasi otomatis tanpa cek mutasi manual.',
    color: 'bg-neo-green text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/thumbsup.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-green',
  },
  {
    id: 'ecosystem',
    badge: 'TRANSFORMASI DIGITAL END-TO-END',
    stat: 'Full Scale',
    statLabel: 'Website + Sistem + Garansi 30 Hari',
    title: 'Ekosistem Digital Terpadu untuk Melipatgandakan Omzet',
    desc: 'Website modern yang tersinkronisasi dengan CRM, WhatsApp API, dashboard analitik penjualan, serta didukung pendampingan teknis prioritas dan garansi pemeliharaan 30 hari penuh.',
    color: 'bg-zinc-900 text-white border-2 border-white shadow-[6px_6px_0px_0px_#FFC901]',
    img: '/images/gumroad/new-sale.svg',
    colSpan: 'lg:col-span-12',
    iconBg: 'bg-neo-pink text-black',
  },
]

const comparison = [
  {
    feature: 'Fokus Solusi',
    us: 'Ekosistem Transformasi Digital & Peningkatan Omzet',
    them: 'Hanya Website Statis Tanpa Strategi Bisnis',
    isBetter: true,
  },
  {
    feature: 'Kecepatan & Performa',
    us: '< 1.2 Detik (Website Modern, Ringan & Ultra Cepat)',
    them: '4–8 Detik (Template Lambat & Plugin Berat)',
    isBetter: true,
  },
  {
    feature: 'Otomasi & AI',
    us: 'Chatbot AI 24/7, Integrasi LLM & WhatsApp API',
    them: 'Tidak Ada / Hanya Form Kontak Biasa',
    isBetter: true,
  },
  {
    feature: 'Sistem Pembayaran & Kurir',
    us: 'Payment Gateway (QRIS/VA) & Cek Ongkir Otomatis',
    them: 'Transfer Manual & Cek Ongkir Manual',
    isBetter: true,
  },
  {
    feature: 'Struktur SEO',
    us: 'Advance Technical SEO, Schema JSON-LD & Local SEO',
    them: 'SEO Dasar / Harus Bayar Tambahan Lagi',
    isBetter: true,
  },
  {
    feature: 'Garansi & Pendampingan',
    us: 'Garansi 30 Hari Pemeliharaan & Edukasi Admin',
    them: 'Selesai Buat Langsung Dilepas Tanpa Bantuan',
    isBetter: true,
  },
]
</script>

<template>
  <section id="keunggulan" class="border-b-2 border-zinc-800 bg-zinc-950 py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Kenapa Memilih Solusi Digital di <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Bukan sekadar bikin website biasa. Kami membangun ekosistem digital terpadu, cepat, cerdas dengan AI &amp; otomasi, dan dirancang khusus mendongkrak omzet bisnis Anda.
        </p>
      </div>

      <div class="space-y-8 sm:space-y-12">
        
        <!-- FEATURE BENTO GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div
            v-for="f in features"
            :key="f.id"
            :class="[
              'neo-box-interactive p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden',
              f.colSpan,
              f.color
            ]"
          >
            <!-- Top Badge & Content -->
            <div>
              <div class="flex items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div class="space-y-1.5 sm:space-y-2 max-w-lg">
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span class="neo-badge bg-black text-white text-[9px] sm:text-[10px]">{{ f.badge }}</span>
                    <span class="text-[10px] sm:text-xs font-mono font-black uppercase px-2 py-0.5 rounded border border-black bg-white/30 text-current">
                      {{ f.stat }}
                    </span>
                  </div>
                  <h3 class="text-lg sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug">
                    {{ f.title }}
                  </h3>
                  <p class="text-xs sm:text-sm font-bold leading-relaxed opacity-90">
                    {{ f.desc }}
                  </p>
                </div>
                
                <div class="shrink-0 hidden md:block">
                  <img
                    :src="f.img"
                    class="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
                    :alt="f.title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COMPARISON TABLE -->
        <div class="neo-box bg-white text-black p-4 sm:p-8 lg:p-10 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_#23C552] sm:shadow-[8px_8px_0px_0px_#23C552]">
          <div class="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 class="text-xl sm:text-3xl lg:text-4xl font-black text-black">
              Perbandingan Solusi Kami vs Vendor Lain
            </h3>
            <p class="text-xs sm:text-sm font-bold text-slate-700 mt-1 sm:mt-2">
              Bandingkan standar kualitas transformasi digital BantuBuatWeb dengan pembuat website konvensional.
            </p>
          </div>

          <div class="overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0">
            <table class="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr class="border-b-2 border-black bg-zinc-100 text-black">
                  <th class="p-2.5 sm:p-3.5 text-[11px] sm:text-xs font-black uppercase">Fitur &amp; Kemampuan</th>
                  <th class="p-2.5 sm:p-3.5 text-[11px] sm:text-xs font-black uppercase bg-neo-yellow text-black border-x-2 border-black">
                    BantuBuatWeb
                  </th>
                  <th class="p-2.5 sm:p-3.5 text-[11px] sm:text-xs font-black uppercase text-slate-500">
                    Vendor / Pembuat Web Biasa
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y-2 divide-black text-xs sm:text-sm font-bold">
                <tr v-for="(c, idx) in comparison" :key="idx" class="hover:bg-zinc-50 transition-colors">
                  <td class="p-2.5 sm:p-3.5 font-black text-slate-900">{{ c.feature }}</td>
                  <td class="p-2.5 sm:p-3.5 font-black bg-neo-yellow/30 text-black border-x-2 border-black">
                    <span class="text-green-700 font-black mr-1.5">✓</span>
                    {{ c.us }}
                  </td>
                  <td class="p-2.5 sm:p-3.5 text-slate-600 opacity-80">
                    <span class="text-red-500 font-black mr-1.5">✕</span>
                    {{ c.them }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
