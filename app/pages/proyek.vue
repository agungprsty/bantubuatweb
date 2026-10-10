<script setup lang="ts">
import { PORTFOLIO } from '~/data/portfolio'

useHead({
  title: 'Portofolio Solusi Digital & Hasil Karya Website | BantuBuatWeb',
  meta: [
    { name: 'description', content: 'Lihat galeri proyek & studi kasus digital transformasi BantuBuatWeb: e-commerce payment gateway, company profile tender, sistem reservasi, dan platform digital berkecepatan tinggi.' },
    { property: 'og:title', content: 'Portofolio Solusi Digital & Hasil Karya Website | BantuBuatWeb' },
    { property: 'og:description', content: 'Studi kasus nyata hasil karya website berkecepatan tinggi, sistem payment gateway, dan solusi transformasi digital untuk akselerasi omzet bisnis.' },
    { property: 'og:url', content: 'https://bantubuat.web.id/proyek' },
  ],
  link: [{ rel: 'canonical', href: 'https://bantubuat.web.id/proyek' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuat.web.id/' },
          { '@type': 'ListItem', position: 2, name: 'Proyek', item: 'https://bantubuat.web.id/proyek' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portofolio BantuBuatWeb',
        url: 'https://bantubuat.web.id/proyek',
        description: 'Kumpulan proyek website profesional buatan BantuBuatWeb.',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: PORTFOLIO.length,
          itemListElement: PORTFOLIO.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            url: `https://bantubuat.web.id/proyek#${p.domain}`,
          })),
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <span class="bg-neo-yellow text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">Portofolio</span>
      </nav>

      <!-- Page Header -->
      <div class="mt-6 max-w-3xl space-y-3 sm:space-y-4">
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Portofolio Karya <span class="bg-neo-pink text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-300 leading-relaxed">
          Tiap proyek di bawah ini dirancang sebagai mesin konversi &amp; kredibilitas bisnis: dari company profile, toko online, hingga sistem custom.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <ul class="mt-8 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="p in PORTFOLIO"
          :key="p.title"
          class="neo-box-interactive bg-white text-black p-4 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <!-- Header bar -->
            <div class="flex items-center justify-between border-b-2 border-black pb-3 mb-3 sm:mb-4">
              <span class="neo-badge bg-neo-yellow text-black text-[9px] sm:text-[10px]">{{ p.tag }}</span>
            </div>

            <!-- Content -->
            <h2 class="text-lg sm:text-xl font-black text-black mb-2">{{ p.title }}</h2>
            <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed mb-4">{{ p.desc }}</p>
          </div>

          <a
            :href="p.url"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-black text-white w-full py-2.5 text-xs sm:text-sm font-black hover:bg-neo-pink hover:text-black mt-2"
          >
            Kunjungi Website Demo
          </a>
        </li>
      </ul>

      <!-- Bottom Banner -->
      <div class="mt-12 sm:mt-16 neo-box bg-neo-yellow text-black p-5 sm:p-8 lg:p-12 text-center border-3 sm:border-4 shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff]">
        <h2 class="text-xl sm:text-3xl lg:text-4xl font-black text-black">Ingin Hasil Karya Serupa Untuk Bisnis Anda?</h2>
        <p class="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm lg:text-base font-bold text-black leading-relaxed">
          Konsultasikan bisnis Anda secara gratis bersama tim kami. Kami bantu pilihkan solusi website paling tepat!
        </p>
        <div class="mt-5 sm:mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          <a
            :href="wa('Halo BantuBuatWeb, saya tertarik buat website seperti di portofolio')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-neo-pink text-black px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black shadow-[4px_4px_0px_0px_#000] w-full sm:w-auto inline-flex items-center justify-center"
          >
            <AppIcon name="whatsapp" class="mr-2 h-5 w-5 shrink-0" />
            Konsultasi WhatsApp Gratis
          </a>
          <NuxtLink
            to="/"
            class="neo-btn bg-white text-black px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-100 w-full sm:w-auto inline-flex items-center justify-center"
          >
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
