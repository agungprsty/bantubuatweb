<script setup lang="ts">
// SEO default dari Pengaturan admin; halaman yang punya meta sendiri tetap menimpanya
const s = useSiteSettings()
// og:image wajib URL absolut. Gambar ideal 1200×630 (ukuran yang dideklarasikan di nuxt.config).
const ogImage = () => (s.value.og_image.startsWith('/') ? `https://bantubuat.web.id${s.value.og_image}` : s.value.og_image)

useHead({
  title: () => s.value.seo_title,
  meta: [
    { name: 'description', content: () => s.value.seo_description },
    { name: 'keywords', content: () => s.value.seo_keywords },
    { property: 'og:title', content: () => s.value.seo_title },
    { property: 'og:description', content: () => s.value.seo_description },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:secure_url', content: ogImage },
    { name: 'twitter:title', content: () => s.value.seo_title },
    { name: 'twitter:description', content: () => s.value.seo_description },
    { name: 'twitter:image', content: ogImage },
  ],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
