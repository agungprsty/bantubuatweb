<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Pembuatan Website #1 Indonesia',
  meta: [
    { name: 'description', content: 'Solusi transformasi digital & pembuatan website berkecepatan tinggi: company profile, e-commerce, chatbot AI, integrasi LLM, payment gateway, dan advance SEO untuk meningkatkan omzet bisnis.' },
    { property: 'og:title', content: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Pembuatan Website #1 Indonesia' },
    { property: 'og:description', content: 'Solusi transformasi digital & pembuatan website berkecepatan tinggi: company profile, e-commerce, chatbot AI, integrasi LLM, payment gateway, dan advance SEO.' },
  ],
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
        description: 'BantuBuatWeb: Solusi transformasi digital dan jasa pembuatan website profesional untuk meningkatkan omzet bisnis. Layanan company profile, e-commerce, advance SEO, chatbot AI, integrasi LLM, payment gateway & sistem otomasi bergaransi.',
        telephone: '+6289686804015',
        email: 'halo@bantubuat.web.id',
        priceRange: 'Rp 2.500.000 - Rp 25.000.000+',
        openingHours: 'Mo-Sa 08:00-21:00',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '150' },
        sameAs: [
          'https://www.instagram.com/bantubuatweb',
          'https://www.facebook.com/bantubuatweb',
          'https://www.linkedin.com/company/bantubuatweb',
        ],
        makesOffer: [
          { '@type': 'Offer', name: 'Starter Bisnis', price: '2500000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Company Profile', price: '4900000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Toko Online', price: '10000000', priceCurrency: 'IDR' },
          { '@type': 'Offer', name: 'Custom System / Integrasi AI', price: '15000000', priceCurrency: 'IDR' },
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
