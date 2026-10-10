<script setup lang="ts">
import { SERVICES, serviceBySlug } from '~/data/services'

const route = useRoute()
const slug = route.params.slug
const service = serviceBySlug(String(slug))

const getPageTitle = (s: typeof service) => {
  if (!s) return 'Layanan Tidak Ditemukan | BantuBuatWeb'
  if (s.slug === 'jasa-pembuatan-website-jogja') return 'Jasa Pembuatan Website Jogja & Yogyakarta (Murah & Cepat) | BantuBuatWeb'
  if (s.slug === 'jasa-pembuatan-website-lampung') return 'Jasa Pembuatan Website Lampung Professional & Cepat | BantuBuatWeb'
  if (s.slug === 'jasa-pembuatan-website-jakarta') return 'Jasa Pembuatan Website Jakarta & Jabodetabek Terbaik | BantuBuatWeb'
  return `${s.title} | BantuBuatWeb`
}

const getAreaServed = (s: typeof service) => {
  if (!s) return { '@type': 'Country', name: 'Indonesia' }
  if (s.slug === 'jasa-pembuatan-website-jogja') return { '@type': 'AdministrativeArea', name: 'Daerah Istimewa Yogyakarta' }
  if (s.slug === 'jasa-pembuatan-website-lampung') return { '@type': 'AdministrativeArea', name: 'Lampung' }
  if (s.slug === 'jasa-pembuatan-website-jakarta') return { '@type': 'AdministrativeArea', name: 'DKI Jakarta' }
  return { '@type': 'Country', name: 'Indonesia' }
}

useHead(() => ({
  title: getPageTitle(service),
  meta: service ? [
    { name: 'description', content: service.desc },
    { property: 'og:title', content: getPageTitle(service) },
    { property: 'og:description', content: service.desc },
    { property: 'og:url', content: `https://bantubuat.web.id/layanan/${service.slug}` },
  ] : [{ name: 'robots', content: 'noindex' }],
  link: service ? [{ rel: 'canonical', href: `https://bantubuat.web.id/layanan/${service.slug}` }] : [],
  script: service ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuat.web.id/' },
          { '@type': 'ListItem', position: 2, name: 'Layanan', item: 'https://bantubuat.web.id/layanan' },
          { '@type': 'ListItem', position: 3, name: service.title, item: `https://bantubuat.web.id/layanan/${service.slug}` },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        url: `https://bantubuat.web.id/layanan/${service.slug}`,
        provider: {
          '@type': 'ProfessionalService',
          '@id': 'https://bantubuat.web.id/#business',
          name: 'BantuBuatWeb',
          url: 'https://bantubuat.web.id/',
          telephone: '+6289686804015',
          email: 'halo@bantubuat.web.id',
        },
        areaServed: getAreaServed(service),
      }),
    },
  ] : [],
}))

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Layanan tidak ditemukan', fatal: true })
}

const next = SERVICES[(SERVICES.findIndex((s) => s.slug === service.slug) + 1) % SERVICES.length]
</script>

<template>
  <div v-if="service" class="bg-black text-white min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex flex-wrap items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <NuxtLink to="/layanan" class="hover:underline">Layanan</NuxtLink>
        <span>/</span>
        <span class="bg-neo-cyan text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">
          {{ service.title }}
        </span>
      </nav>

      <div class="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-12 items-start">
        
        <!-- Main Content -->
        <div class="lg:col-span-8 space-y-6 sm:space-y-8">
          <div class="neo-box bg-white text-black p-4 sm:p-8 lg:p-10 border-3 sm:border-4 border-white shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff]">
            
            <div class="flex items-center gap-3 sm:gap-4 border-b-2 border-black pb-4 sm:pb-6 mb-4 sm:mb-6">
              <span class="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-neo-pink text-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                <AppIcon :name="service.icon" class="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <div>
                <span class="neo-badge bg-neo-yellow text-black text-[9px] sm:text-[10px] mb-1">{{ service.group }}</span>
                <h1 class="text-xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-tight">
                  {{ service.title }}
                </h1>
              </div>
            </div>

            <p class="text-base sm:text-lg font-black text-slate-900 leading-snug mb-3 sm:mb-4">
              "{{ service.tagline }}"
            </p>

            <p class="text-xs sm:text-sm lg:text-base font-bold text-slate-700 leading-relaxed mb-6 sm:mb-8">
              {{ service.desc }}
            </p>

            <!-- Benefits -->
            <div class="border-t-2 border-black pt-5 sm:pt-6 mb-6 sm:mb-8">
              <h2 class="text-lg sm:text-xl font-black text-black mb-3 sm:mb-4">Yang Anda Dapatkan:</h2>
              <ul class="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                <li v-for="b in service.benefits" :key="b" class="flex items-start gap-2.5 text-xs sm:text-sm font-extrabold text-slate-900 bg-zinc-50 p-2.5 sm:p-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-neo-green font-black text-xs text-black border border-black">✓</span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <!-- Local Specific Section for Wilayah & Kota -->
            <div v-if="service.group === 'Wilayah & Kota'" class="border-t-2 border-black pt-5 sm:pt-6 mb-6 sm:mb-8">
              <h2 class="text-lg sm:text-xl font-black text-black mb-3 sm:mb-4">Keunggulan Khusus untuk Bisnis &amp; UMKM Wilayah:</h2>
              <div class="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <div class="p-3 sm:p-4 bg-neo-cyan/20 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
                  <span class="text-xs font-black uppercase text-black block mb-1">📍 Google Maps &amp; Local SEO</span>
                  <p class="text-xs font-bold text-slate-800">Website disetup agar langsung terindeks di pencarian lokal Google dan siap dihubungkan ke Google Business Profile.</p>
                </div>
                <div class="p-3 sm:p-4 bg-neo-yellow/30 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
                  <span class="text-xs font-black uppercase text-black block mb-1">⚡ Super Cepat di Smartphone</span>
                  <p class="text-xs font-bold text-slate-800">Optimasi mobile-first untuk kenyamanan calon pelanggan yang mengakses via smartphone tanpa buffer.</p>
                </div>
                <div class="p-3 sm:p-4 bg-neo-pink/20 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000]">
                  <span class="text-xs font-black uppercase text-black block mb-1">🤝 Pendampingan &amp; Garansi</span>
                  <p class="text-xs font-bold text-slate-800">Bebas konsultasi via WhatsApp atau meeting online untuk memahami karakter target pasar Anda.</p>
                </div>
              </div>
            </div>

            <!-- Suitable For Bonus Card -->
            <div class="neo-box bg-neo-yellow text-black p-4 sm:p-5 border-2 border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] mb-6 sm:mb-8">
              <span class="font-black uppercase text-[11px] sm:text-xs text-black block mb-1">Catatan:</span>
              <p class="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                {{ service.bonus }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                :href="wa(`Halo BantuBuatWeb, saya tertarik dengan layanan ${service.title}. Boleh minta info detail & biayanya?`)"
                target="_blank"
                rel="noopener"
                class="neo-btn bg-neo-pink text-black px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 inline-flex items-center justify-center w-full sm:w-auto"
              >
                <AppIcon name="whatsapp" class="mr-2 sm:mr-2.5 h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                Konsultasi {{ service.title }}
              </a>
              <NuxtLink
                to="/layanan"
                class="neo-btn bg-black text-white px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:bg-neo-yellow hover:text-black inline-flex items-center justify-center w-full sm:w-auto"
              >
                Lihat Semua Layanan
              </NuxtLink>
            </div>

          </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-6">
          <div class="neo-box bg-zinc-900 text-white p-5 sm:p-6 lg:p-8 border-2 border-white shadow-[6px_6px_0px_0px_#FF90E8] lg:sticky lg:top-24">
            
            <div class="flex items-center gap-2 border-b-2 border-zinc-700 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h3 class="text-base sm:text-lg font-black uppercase">Estimasi &amp; Garansi</h3>
            </div>

            <p class="text-xs font-bold leading-relaxed mb-5 sm:mb-6 text-zinc-300">
              Setiap proyek dikerjakan secara profesional sesuai alur bisnis Anda tanpa template pasaran.
            </p>

            <div class="space-y-2.5 sm:space-y-3 border-y-2 border-zinc-800 py-3 sm:py-4 mb-5 sm:mb-6 text-xs sm:text-sm font-bold">
              <div class="flex justify-between items-center">
                <span class="text-zinc-400">Estimasi Waktu</span>
                <span class="font-black text-white">1–3 Minggu</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-zinc-400">Garansi Maintenance</span>
                <span class="font-black text-white">30 Hari Full</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-zinc-400">Teknologi</span>
                <span class="font-black text-white">Modern Stack</span>
              </div>
            </div>

            <a
              :href="wa(`Halo BantuBuatWeb, saya tertarik dengan ${service.title}, boleh minta penawaran pasti?`)"
              target="_blank"
              rel="noopener"
              class="neo-btn bg-neo-yellow text-black w-full py-3 sm:py-3.5 text-xs sm:text-sm font-black hover:bg-neo-pink hover:text-black shadow-[3px_3px_0px_0px_#fff] sm:shadow-[4px_4px_0px_0px_#fff] flex items-center justify-center mb-3 sm:mb-4"
            >
              <AppIcon name="whatsapp" class="mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              Minta Penawaran Resmi
            </a>

            <NuxtLink
              :to="`/layanan/${next.slug}`"
              class="block text-center text-xs font-black hover:text-neo-pink transition-colors mt-2"
            >
              Layanan Selanjutnya: {{ next.title }} →
            </NuxtLink>

          </div>
        </aside>

      </div>
    </div>
  </div>
</template>