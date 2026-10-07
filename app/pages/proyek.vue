<script setup lang="ts">
import { PORTFOLIO } from '~/data/portfolio'

useHead({
  title: 'Portofolio & Hasil Karya Website | BantuBuatWeb',
  meta: [
    { name: 'description', content: 'Lihat galeri proyek hasil karya BantuBuatWeb: company profile, toko online, sistem booking, landing page, hingga aplikasi web modern di Indonesia.' },
  ],
  link: [{ rel: 'canonical', href: 'https://bantubuatweb.com/proyek' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuatweb.com/' },
          { '@type': 'ListItem', position: 2, name: 'Proyek', item: 'https://bantubuatweb.com/proyek' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portofolio BantuBuatWeb',
        url: 'https://bantubuatweb.com/proyek',
        description: 'Kumpulan proyek website profesional buatan BantuBuatWeb.',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: PORTFOLIO.length,
          itemListElement: PORTFOLIO.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            url: `https://bantubuatweb.com/proyek#${p.domain}`,
          })),
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-24 pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <span class="bg-neo-yellow text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">Portofolio</span>
      </nav>

      <!-- Page Header -->
      <div class="mt-6 max-w-3xl space-y-4">
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Portofolio Karya <span class="bg-neo-pink text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb</span>
        </h1>
        <p class="text-base sm:text-lg font-bold text-zinc-300 leading-relaxed">
          Tiap proyek di bawah ini dirancang sebagai mesin konversi &amp; kredibilitas bisnis: dari company profile, toko online, hingga sistem custom.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="p in PORTFOLIO"
          :key="p.title"
          class="neo-box-interactive bg-white text-black p-6 flex flex-col justify-between"
        >
          <div>
            <!-- Header bar -->
            <div class="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
              <span class="neo-badge bg-neo-yellow text-black text-[10px]">{{ p.tag }}</span>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-black text-black mb-2">{{ p.title }}</h3>
            <p class="text-xs font-bold text-slate-700 leading-relaxed mb-4">{{ p.desc }}</p>
          </div>

          <a
            :href="p.url"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-black text-white w-full py-2.5 text-xs font-black hover:bg-neo-pink hover:text-black"
          >
            Kunjungi Website Demo
          </a>
        </li>
      </ul>

      <!-- Bottom Banner -->
      <div class="mt-16 neo-box bg-neo-yellow text-black p-8 sm:p-12 text-center border-4 shadow-[8px_8px_0px_0px_#fff]">
        <h2 class="text-2xl sm:text-4xl font-black text-black">Ingin Hasil Karya Serupa Untuk Bisnis Anda?</h2>
        <p class="mx-auto mt-3 max-w-xl text-sm sm:text-base font-bold text-black">
          Konsultasikan bisnis Anda secara gratis bersama tim kami. Kami bantu pilihkan solusi website paling tepat!
        </p>
        <div class="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            :href="wa('Halo BantuBuatWeb, saya tertarik buat website seperti di portofolio')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-neo-pink text-black px-8 py-4 font-black shadow-[4px_4px_0px_0px_#000]"
          >
            <AppIcon name="whatsapp" class="mr-2 h-5 w-5" />
            Konsultasi WhatsApp Gratis
          </a>
          <NuxtLink
            to="/"
            class="neo-btn bg-white text-black px-8 py-4 font-black shadow-[4px_4px_0px_0px_#000]"
          >
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
