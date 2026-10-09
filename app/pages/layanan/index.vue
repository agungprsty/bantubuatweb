<script setup lang="ts">
import { ref, computed } from 'vue'
import { SERVICES, serviceGroups } from '~/data/services'

const active = ref('Semua')
const filtered = computed(() =>
  active.value === 'Semua' ? SERVICES : SERVICES.filter((s) => s.group === active.value),
)

useHead({
  title: 'Layanan Pembuatan Website | BantuBuatWeb',
  meta: [
    { name: 'description', content: 'Kategori & jenis layanan pembuatan website BantuBuatWeb: landing page, company profile, e-commerce, portal sekolah, klinik, hotel, dan sistem custom.' },
  ],
  link: [{ rel: 'canonical', href: 'https://bantubuat.web.id/layanan' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuat.web.id/' },
          { '@type': 'ListItem', position: 2, name: 'Layanan', item: 'https://bantubuat.web.id/layanan' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Layanan Pembuatan Website BantuBuatWeb',
        url: 'https://bantubuat.web.id/layanan',
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title,
          url: `https://bantubuat.web.id/layanan/${s.slug}`,
        })),
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
        <span class="bg-neo-cyan text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">Layanan</span>
      </nav>

      <!-- Page Header -->
      <div class="mt-6 max-w-3xl space-y-4">
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Jenis Website yang Kami <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">Kerjakan</span>
        </h1>
        <p class="text-base sm:text-lg font-bold text-zinc-300 leading-relaxed">
          Pilih kategori website yang sesuai dengan industri dan tujuan bisnis Anda.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="mt-8 flex flex-wrap items-center gap-3" role="group" aria-label="Filter kategori layanan">
        <button
          :class="[
            'neo-btn text-xs sm:text-sm px-4 py-2 font-black',
            active === 'Semua' ? 'bg-neo-pink text-black' : 'bg-white text-black hover:bg-neo-yellow'
          ]"
          @click="active = 'Semua'"
        >
          Semua Layanan
        </button>
        <button
          v-for="g in serviceGroups"
          :key="g"
          :class="[
            'neo-btn text-xs sm:text-sm px-4 py-2 font-black',
            active === g ? 'bg-neo-pink text-black' : 'bg-white text-black hover:bg-neo-yellow'
          ]"
          @click="active = g"
        >
          {{ g }}
        </button>
      </div>

      <!-- Service Grid -->
      <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="s in filtered" :key="s.slug">
          <NuxtLink
            :to="`/layanan/${s.slug}`"
            class="neo-box-interactive bg-white text-black p-6 flex flex-col justify-between h-full block"
          >
            <div>
              <div class="flex items-center gap-4 border-b-2 border-black pb-4 mb-4">
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#000]">
                  <AppIcon :name="s.icon" class="h-6 w-6" />
                </span>
                <h3 class="text-lg font-black text-black leading-tight">{{ s.title }}</h3>
              </div>
              <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed mb-4">{{ s.tagline }}</p>
            </div>

            <span class="neo-btn bg-neo-pink text-black w-full py-2 text-xs font-black group-hover:bg-black group-hover:text-white mt-4">
              Lihat Detail Layanan
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Box -->
      <div class="mt-16 neo-box bg-neo-green text-black p-8 sm:p-12 text-center border-4 shadow-[8px_8px_0px_0px_#fff]">
        <h2 class="text-2xl sm:text-4xl font-black text-black">Bingung Memilih Kategori Website Yang Pas?</h2>
        <p class="mx-auto mt-3 max-w-xl text-sm sm:text-base font-bold text-black">
          Ceritakan alur &amp; tujuan bisnis Anda via WhatsApp. Tim BantuBuatWeb siap membantu memberikan solusi gratis!
        </p>
        <a
          :href="wa('Halo BantuBuatWeb, saya mau tanya rekomendasi jenis website untuk bisnis saya')"
          target="_blank"
          rel="noopener"
          class="neo-btn bg-black text-white px-8 py-4 text-base font-black shadow-[4px_4px_0px_0px_#fff] hover:bg-neo-yellow hover:text-black mt-6"
        >
          <AppIcon name="whatsapp" class="mr-2 h-5 w-5" />
          Konsultasi Gratis via WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>