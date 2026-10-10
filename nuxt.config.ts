import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'lottie-player',
        },
      },
    },
  },
  icon: {
    clientBundle: {
      icons: [
        'lucide:menu', 'lucide:x', 'lucide:check', 'lucide:arrow-right',
        'lucide:code', 'lucide:rocket', 'lucide:smartphone', 'lucide:gauge',
        'lucide:map-pin', 'lucide:phone', 'lucide:mail', 'lucide:quote',
        'lucide:shopping-bag', 'lucide:instagram', 'lucide:facebook', 'lucide:linkedin',
        'lucide:building', 'lucide:megaphone', 'lucide:landmark', 'lucide:users',
        'lucide:graduation-cap', 'lucide:newspaper', 'lucide:home', 'lucide:bed',
        'lucide:heart-pulse', 'lucide:utensils', 'lucide:hand-heart', 'lucide:layers',
        'lucide:bot', 'lucide:sparkles', 'lucide:search', 'lucide:credit-card',
        'lucide:truck', 'lucide:cpu', 'lucide:zap', 'lucide:database',
        'lucide:workflow', 'lucide:shield-check', 'lucide:trending-up',
        'ph:star-fill', 'mdi:whatsapp',
      ],
    },
  },
  hooks: {
    'vite:extendConfig'(config) {
      config.plugins = (config.plugins || []).filter(
        (p: Plugin) => p?.name !== 'nuxt:devtools:config' && p?.name !== 'nuxt:devtools:config-retriever',
      )
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Pembuatan Website #1 Indonesia',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'description', content: 'BantuBuatWeb: Solusi transformasi digital & pembuatan website berkecepatan tinggi untuk menaikkan omzet bisnis. Layanan company profile, e-commerce, chatbot AI, integrasi LLM, payment gateway, dan advance SEO bergaransi.' },
        { name: 'keywords', content: 'solusi transformasi digital, jasa pembuatan website, jasa buat website profesional, company profile perusahaan, toko online payment gateway, integrasi chatbot ai, integrasi llm openai, jasa advance seo, otomasi bisnis, bantubuatweb' },
        { name: 'author', content: 'BantuBuatWeb' },
        { name: 'theme-color', content: '#FF90E8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'BantuBuatWeb' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://bantubuat.web.id/' },
        { property: 'og:title', content: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Website Bisnis Indonesia' },
        { property: 'og:description', content: 'Transformasikan bisnis Anda dengan website modern berkecepatan tinggi, integrasi AI, sistem payment gateway otomatis, dan optimasi SEO untuk meningkatkan omzet penjualan.' },
        { property: 'og:image', content: 'https://bantubuat.web.id/og-cover.svg' },
        { property: 'og:image:alt', content: 'BantuBuatWeb | Solusi Transformasi Digital & Jasa Pembuatan Website Indonesia' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'BantuBuatWeb | Solusi Transformasi Digital & Website Bisnis' },
        { name: 'twitter:description', content: 'Solusi transformasi digital: website berkecepatan tinggi, integrasi AI, payment gateway, dan advance SEO untuk akselerasi pertumbuhan omzet bisnis.' },
        { name: 'twitter:image', content: 'https://bantubuat.web.id/og-cover.svg' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://bantubuat.web.id/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BV260BCP64',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BV260BCP64');
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
})