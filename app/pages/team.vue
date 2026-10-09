<script setup lang="ts">
const team = [
  {
    name: 'Agung Prasetyo',
    role: 'Founder & Tech Lead',
    initial: 'A',
    color: 'bg-neo-pink text-black',
    bio: 'Pengembang software & web sejak 2017. Berpengalaman menangani proyek website UMKM hingga sistem enterprise dengan performa tinggi & bebas hambatan.',
  },
  {
    name: 'Dery Andreansyah',
    role: 'UI/UX & Growth Specialist',
    initial: 'D',
    color: 'bg-neo-yellow text-black',
    bio: 'Spesialis desain & marketing konversi. Merancang antarmuka modern yang estetik, ramah pengguna, & didesain khusus mendatangkan pembeli.',
  },
]

useHead({
  title: 'Tim Kami | BantuBuatWeb',
  meta: [
    { name: 'description', content: 'Kenalan dengan tim profesional di balik BantuBuatWeb: engineer, desainer UI/UX, dan spesialis digital yang siap membantu bisnis Anda tumbuh.' },
  ],
  link: [{ rel: 'canonical', href: 'https://bantubuat.web.id/team' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: 'https://bantubuat.web.id/' },
          { '@type': 'ListItem', position: 2, name: 'Tim Kami', item: 'https://bantubuat.web.id/team' },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Tim BantuBuatWeb',
        url: 'https://bantubuat.web.id/team',
        mainEntity: {
          '@type': 'Organization',
          name: 'BantuBuatWeb',
          url: 'https://bantubuat.web.id/',
          member: team.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <span class="bg-neo-pink text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">Tim Kami</span>
      </nav>

      <!-- Page Header -->
      <div class="mt-6 text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Orang di Balik <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-300 leading-relaxed">
          Kami fokus menghadirkan karya berstandar tinggi untuk seluruh klien Indonesia.
        </p>
      </div>

      <!-- Team Grid -->
      <ul class="mx-auto mt-8 sm:mt-12 grid max-w-4xl gap-5 sm:gap-8 sm:grid-cols-2">
        <li
          v-for="m in team"
          :key="m.name"
          class="neo-box bg-white text-black p-4 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center gap-3 sm:gap-4 border-b-2 border-black pb-3 sm:pb-4 mb-3 sm:mb-4">
              <span :class="['flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border-2 border-black font-black text-xl sm:text-2xl text-black shadow-[2px_2px_0px_0px_#000]', m.color]">
                {{ m.initial }}
              </span>
              <div>
                <h2 class="text-lg sm:text-xl font-black text-black">{{ m.name }}</h2>
                <p class="text-[10px] sm:text-xs font-black uppercase text-neo-pink bg-black px-2 py-0.5 rounded inline-block mt-1">{{ m.role }}</p>
              </div>
            </div>
            <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">{{ m.bio }}</p>
          </div>

          <div class="mt-5 sm:mt-6 flex gap-3 pt-3 sm:pt-4 border-t-2 border-black">
            <a href="mailto:halo@bantubuat.web.id" aria-label="Mail" class="neo-btn bg-slate-100 p-2 text-black hover:bg-neo-yellow min-h-[38px] min-w-[38px] flex items-center justify-center">
              <AppIcon name="mail" class="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/bantubuatweb" target="_blank" rel="noopener" aria-label="LinkedIn" class="neo-btn bg-slate-100 p-2 text-black hover:bg-neo-yellow min-h-[38px] min-w-[38px] flex items-center justify-center">
              <AppIcon name="linkedin" class="h-4 w-4" />
            </a>
          </div>
        </li>
      </ul>

      <!-- CTA Box -->
      <div class="mt-12 sm:mt-16 neo-box bg-neo-pink text-black p-5 sm:p-8 lg:p-12 text-center border-3 sm:border-4 shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff]">
        <h2 class="text-xl sm:text-3xl lg:text-4xl font-black text-black">Mau Diskusi Proyek Langsung Bersama Tim?</h2>
        <p class="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm lg:text-base font-bold text-black leading-relaxed">
          Konsultasi 15 menit gratis via WhatsApp. Kami berikan rekomendasi transparan sesuai alur bisnis Anda.
        </p>
        <a
          :href="wa('Halo BantuBuatWeb, saya mau konsultasi buat website bersama tim')"
          target="_blank"
          rel="noopener"
          class="neo-btn bg-neo-yellow text-black px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black shadow-[4px_4px_0px_0px_#000] mt-5 sm:mt-6 w-full sm:w-auto inline-flex items-center justify-center"
        >
          <AppIcon name="whatsapp" class="mr-2 h-5 w-5 shrink-0" />
          Chat Tim Sekarang
        </a>
      </div>
    </div>
  </div>
</template>
