<script setup lang="ts">
import { getSortedArticles } from '~/data/articles'

const sortedArticles = computed(() => getSortedArticles())

const categories = computed(() => {
  const set = new Set<string>()
  sortedArticles.value.forEach((p) => {
    if (p.category) set.add(p.category)
  })
  return ['Semua', ...Array.from(set)]
})

const selectedCategory = ref('Semua')

const filteredPosts = computed(() => {
  const list = sortedArticles.value
  if (selectedCategory.value === 'Semua') return list
  return list.filter((p) => p.category === selectedCategory.value)
})

useHead({
  title: 'Blog & Panduan Website Bisnis Indonesia | BantuBuatWeb',
  meta: [
    {
      name: 'description',
      content:
        'Kumpulan artikel, tips praktis, panduan biaya, dan strategi digital marketing pembuatan website profesional untuk UMKM dan bisnis di Indonesia.',
    },
    { property: 'og:title', content: 'Blog & Panduan Website Bisnis Indonesia | BantuBuatWeb' },
    {
      property: 'og:description',
      content:
        'Kumpulan artikel, tips praktis, panduan biaya, dan strategi digital marketing pembuatan website profesional untuk UMKM dan bisnis di Indonesia.',
    },
    { property: 'og:url', content: 'https://bantubuat.web.id/blog' },
  ],
  link: [{ rel: 'canonical', href: 'https://bantubuat.web.id/blog' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Blog BantuBuatWeb',
        url: 'https://bantubuat.web.id/blog',
        description:
          'Panduan lengkap pembuatan website, perbandingan teknologi, biaya, dan strategi digital bisnis di Indonesia.',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuat.web.id/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bantubuat.web.id/blog' },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <nav class="flex flex-wrap items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <span class="bg-neo-cyan text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">
          Blog &amp; Panduan
        </span>
      </nav>

      <!-- Header Section -->
      <div class="mt-6 sm:mt-8 mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Panduan &amp; Artikel <span class="bg-neo-pink text-black px-2.5 py-0.5 sm:px-3 sm:py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff] sm:shadow-[4px_4px_0px_0px_#fff] inline-block">BantuBuatWeb</span>
        </h1>
        <p class="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-zinc-300 max-w-3xl font-bold leading-relaxed">
          Pelajari seluk-beluk biaya pembuatan website, strategi konversi iklan, perbandingan teknologi web, dan rahasia sukses go digital untuk bisnis Anda.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          @click="selectedCategory = cat"
          :class="[
            'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] transition-transform cursor-pointer',
            selectedCategory === cat
              ? 'bg-neo-yellow text-black translate-x-0.5 translate-y-0.5 shadow-none'
              : 'bg-white text-black hover:bg-neo-pink',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div v-if="filteredPosts.length > 0" class="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="neo-box bg-white text-black p-4 sm:p-6 border-3 sm:border-4 border-white shadow-[6px_6px_0px_0px_#FF90E8] sm:shadow-[8px_8px_0px_0px_#FF90E8] flex flex-col justify-between hover:-translate-y-1 transition-transform"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span class="neo-badge bg-neo-cyan text-black text-[10px] sm:text-[11px]">{{ post.category }}</span>
              <span class="text-[11px] sm:text-xs font-bold text-zinc-500">{{ post.readTime }}</span>
            </div>

            <NuxtLink :to="`/blog/${post.slug}`">
              <h2 class="text-lg sm:text-xl font-black text-black leading-snug hover:text-neo-pink transition-colors line-clamp-2 mb-2 sm:mb-3">
                {{ post.title }}
              </h2>
            </NuxtLink>

            <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed line-clamp-3 mb-5 sm:mb-6">
              {{ post.description }}
            </p>
          </div>

          <div class="border-t-2 border-black pt-3 sm:pt-4 mt-auto">
            <div class="flex items-center justify-between">
              <div class="text-xs font-black text-slate-900">
                <span class="block text-black text-xs sm:text-sm">{{ post.author }}</span>
                <span class="text-[10px] sm:text-[11px] text-zinc-500 font-bold">{{ post.date }}</span>
              </div>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="neo-btn bg-black text-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-black hover:bg-neo-yellow hover:text-black inline-flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
              >
                Baca →
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="text-center py-12 sm:py-16 neo-box bg-zinc-900 text-white p-6 sm:p-8 border-2 border-zinc-700">
        <p class="text-sm sm:text-base font-bold">Belum ada artikel pada kategori ini.</p>
      </div>

    </div>
  </div>
</template>
