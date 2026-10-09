<script setup lang="ts">
import { marked } from 'marked'
import { getArticleBySlug } from '~/data/articles'
import { wa } from '~/utils/wa'

const route = useRoute()
const slug = String(route.params.slug)
const post = getArticleBySlug(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan', fatal: true })
}

const renderedHtml = computed(() => {
  if (!post) return ''
  return marked.parse(post.content)
})

useHead(() => ({
  title: post ? `${post.title} | Blog BantuBuatWeb` : 'Artikel Tidak Ditemukan',
  meta: post
    ? [
        { name: 'description', content: post.description },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://bantubuat.web.id/blog/${post.slug}` },
        { property: 'og:image', content: 'https://bantubuat.web.id/og-cover.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.description },
        { name: 'twitter:image', content: 'https://bantubuat.web.id/og-cover.svg' },
      ]
    : [{ name: 'robots', content: 'noindex' }],
  link: post ? [{ rel: 'canonical', href: `https://bantubuat.web.id/blog/${post.slug}` }] : [],
  script: post
    ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: 'https://bantubuat.web.id/og-cover.svg',
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://bantubuat.web.id/blog/${post.slug}`,
            },
            author: {
              '@type': 'Person',
              name: post.author || 'Agung Prasetyo',
              jobTitle: post.authorRole || 'Founder BantuBuatWeb',
              url: 'https://bantubuat.web.id/team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'BantuBuatWeb',
              url: 'https://bantubuat.web.id/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://bantubuat.web.id/favicon.svg',
              },
            },
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
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://bantubuat.web.id/blog/${post.slug}` },
            ],
          }),
        },
      ]
    : [],
}))
</script>

<template>
  <div v-if="post" class="bg-black text-white min-h-screen pt-24 pb-20">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      
      <!-- Breadcrumb -->
      <nav class="flex flex-wrap items-center gap-2 text-xs font-black uppercase text-zinc-300 mb-8" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
        <span>/</span>
        <span class="bg-neo-cyan text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff] truncate max-w-[200px] sm:max-w-xs">
          {{ post.category }}
        </span>
      </nav>

      <!-- Article Header Container -->
      <header class="neo-box bg-white text-black p-6 sm:p-10 border-4 border-white shadow-[8px_8px_0px_0px_#fff] mb-10">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="neo-badge bg-neo-yellow text-black text-xs">{{ post.category }}</span>
          <span class="text-xs font-bold text-zinc-600">⏱️ {{ post.readTime }}</span>
          <span class="text-xs font-bold text-zinc-600">📅 {{ post.date }}</span>
        </div>

        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-6">
          {{ post.title }}
        </h1>

        <p class="text-base sm:text-lg font-bold text-slate-800 leading-relaxed border-l-4 border-neo-pink pl-4 py-1 mb-6 bg-neo-pink/10">
          {{ post.description }}
        </p>

        <!-- Author Byline -->
        <div class="flex items-center gap-3 border-t-2 border-black pt-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-neo-yellow text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
            {{ (post.author || 'A')[0] }}
          </div>
          <div>
            <span class="text-sm font-black text-black block">{{ post.author }}</span>
            <span class="text-xs font-bold text-zinc-600">{{ post.authorRole }}</span>
          </div>
        </div>
      </header>

      <!-- Article Content Body -->
      <main class="neo-box bg-white text-black p-6 sm:p-12 border-4 border-white shadow-[8px_8px_0px_0px_#FF90E8] mb-12">
        <div
          class="prose prose-lg max-w-none text-slate-900 font-medium leading-relaxed
                 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-black [&_h2]:border-b-2 [&_h2]:border-black [&_h2]:pb-2 [&_h2]:mt-10 [&_h2]:mb-4
                 [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-3
                 [&_p]:font-bold [&_p]:text-slate-800 [&_p]:leading-relaxed [&_p]:mb-5
                 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2 [&_ul]:font-bold [&_ul]:text-slate-800
                 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-2 [&_ol]:font-bold [&_ol]:text-slate-800
                 [&_strong]:font-black [&_strong]:text-black
                 [&_blockquote]:border-l-4 [&_blockquote]:border-neo-yellow [&_blockquote]:bg-zinc-100 [&_blockquote]:p-4 [&_blockquote]:font-bold [&_blockquote]:my-6
                 [&_table]:w-full [&_table]:border-2 [&_table]:border-black [&_table]:my-6 [&_table]:border-collapse
                 [&_th]:bg-neo-yellow [&_th]:text-black [&_th]:border-2 [&_th]:border-black [&_th]:p-3 [&_th]:font-black [&_th]:text-left
                 [&_td]:border-2 [&_td]:border-black [&_td]:p-3 [&_td]:font-bold [&_td]:text-slate-800
                 [&_hr]:border-black [&_hr]:my-8"
          v-html="renderedHtml"
        />

        <!-- Tags List -->
        <div v-if="post.tags && post.tags.length > 0" class="border-t-2 border-black pt-6 mt-10">
          <span class="text-xs font-black uppercase text-zinc-600 block mb-3">Topik Terkait:</span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 bg-zinc-100 text-black text-xs font-black border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </main>

      <!-- E-E-A-T Author Box Card -->
      <section class="neo-box bg-neo-yellow text-black p-6 sm:p-8 border-4 border-white shadow-[6px_6px_0px_0px_#fff] mb-12">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-neo-pink text-black font-black text-2xl shadow-[3px_3px_0px_0px_#000]">
            {{ (post.author || 'A')[0] }}
          </div>
          <div>
            <span class="text-xs font-black uppercase bg-black text-white px-2.5 py-0.5 rounded inline-block mb-1">Ditinjau oleh Penulis Ahli</span>
            <h3 class="text-xl font-black text-black">{{ post.author }}</h3>
            <p class="text-xs sm:text-sm font-bold text-slate-900 mt-1 leading-relaxed">
              {{ post.authorRole }}. Praktisi teknologi dan software engineer yang berpengalaman merancang website dan aplikasi modern berkecepatan tinggi untuk bisnis di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA Conversion Box -->
      <section class="neo-box bg-neo-pink text-black p-6 sm:p-10 border-4 border-white shadow-[8px_8px_0px_0px_#fff] text-center mb-12">
        <h3 class="text-2xl sm:text-3xl font-black text-black mb-3">
          Ingin Website Bisnis yang Cepat, Elegan &amp; Menghasilkan Omset?
        </h3>
        <p class="text-sm sm:text-base font-bold text-slate-900 max-w-2xl mx-auto mb-6 leading-relaxed">
          Konsultasikan kebutuhan pembuatan website company profile, landing page, atau toko online Anda bersama tim BantuBuatWeb. Bebas biaya konsultasi di awal!
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            :href="wa(`Halo BantuBuatWeb, saya baru membaca artikel '${post.title}' dan ingin konsultasi pembuatan website.`)"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-black text-white px-8 py-4 text-base font-black shadow-[4px_4px_0px_0px_#000] hover:bg-neo-yellow hover:text-black inline-flex items-center justify-center"
          >
            <AppIcon name="whatsapp" class="mr-2 h-6 w-6" />
            Konsultasi WhatsApp Sekarang
          </a>
          <NuxtLink
            to="/blog"
            class="neo-btn bg-white text-black px-6 py-4 text-base font-black shadow-[4px_4px_0px_0px_#000] hover:bg-zinc-100 inline-flex items-center justify-center"
          >
            ← Kembali ke Daftar Artikel
          </NuxtLink>
        </div>
      </section>

    </div>
  </div>
</template>
