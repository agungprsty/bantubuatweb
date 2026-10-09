<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'BantuBuatWeb | Jasa Pembuatan Website Professional & Digital Solution #1 Indonesia',
  link: [{ rel: 'canonical', href: 'https://bantubuat.web.id/' }],
  script: [
    {
      src: 'https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js',
      defer: true,
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://bantubuat.web.id/#business',
        name: 'BantuBuatWeb',
        url: 'https://bantubuat.web.id/',
        image: 'https://bantubuat.web.id/og-cover.svg',
        logo: 'https://bantubuat.web.id/favicon.svg',
        description: 'BantuBuatWeb: Jasa pembuatan website professional, company profile, toko online, landing page & aplikasi web modern di Indonesia. Desain modern, super cepat, SEO optimized & bergaransi.',
        telephone: '+6289686804015',
        email: 'halo@bantubuat.web.id',
        priceRange: 'Rp 800.000 - Rp 7.000.000',
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
  ],
})
</script>

<template>
  <div class="bg-black text-white selection:bg-neo-pink selection:text-black">
    <HomeHero />
    <HomeServices />
    <HomeHowItWorksVideo />
    <HomeKeunggulanGrid />
    <HomePortfolioCarousel />
    <HomePricing />
    <HomeTestimonials />
    <HomeFaq />
    <HomeCtaBanner />
  </div>
</template>
