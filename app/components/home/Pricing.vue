<script setup lang="ts">
import { HOME_PLANS } from '~/data/homeData'
</script>

<template>
  <section id="harga" class="border-b-2 border-zinc-800 bg-zinc-950 py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Pilihan Paket Investasi
        </h2>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Transparan tanpa biaya tersembunyi. Termasuk gratis domain, hosting ultra cepat, garansi 30 hari &amp; pendampingan teknis.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        <div
          v-for="(p, idx) in HOME_PLANS"
          :key="idx"
          :class="[
            'neo-box p-4 sm:p-6 flex flex-col justify-between relative border-2 transition-all duration-200',
            p.featured
              ? 'border-3 sm:border-4 shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff] ring-2 sm:ring-4 ring-white/20'
              : 'shadow-[3px_3px_0px_0px_#fff] sm:shadow-[4px_4px_0px_0px_#fff]',
            p.color
          ]"
        >
          <span
            v-if="p.badge"
            class="absolute -top-3 sm:-top-4 right-3 sm:right-4 rounded-full border-2 border-black bg-neo-yellow px-2.5 py-0.5 sm:px-3 sm:py-1 font-black text-[10px] sm:text-xs text-black shadow-[2px_2px_0px_0px_#000]"
          >
            {{ p.badge }}
          </span>

          <div>
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-lg sm:text-2xl font-black tracking-tight leading-snug">{{ p.name }}</h3>
              <img :src="p.icon" class="h-6 w-6 sm:h-8 sm:w-8 object-contain shrink-0" :alt="p.name" />
            </div>
            
            <p class="text-[11px] sm:text-xs font-bold opacity-85 mt-1 mb-3 sm:mb-4 min-h-[2rem] sm:min-h-[2.5rem] leading-relaxed">
              {{ p.desc }}
            </p>

            <div class="mb-4 sm:mb-6 border-b-2 border-current pb-3 sm:pb-4">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-black break-words tracking-tight">{{ p.price }}</div>
              <div v-if="p.original" class="text-[11px] sm:text-xs font-extrabold opacity-60 line-through">{{ p.original }}</div>
              <div class="text-[10px] sm:text-[11px] font-extrabold opacity-90 mt-1">{{ p.renewal }}</div>
            </div>

            <ul class="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <li v-for="(perk, i) in p.perks" :key="i" class="flex items-start text-xs sm:text-sm font-extrabold">
                <span class="mr-2 font-black shrink-0">✓</span>
                <span>{{ perk }}</span>
              </li>
            </ul>
          </div>

          <a
            :href="wa(`Halo BantuBuatWeb, saya mau konsultasi dan pesan paket ${p.name}`)"
            target="_blank"
            rel="noopener"
            :class="[
              'neo-btn w-full py-2.5 sm:py-3 text-xs sm:text-sm font-black text-center justify-center',
              p.featured
                ? 'bg-black text-white hover:bg-neo-yellow hover:text-black shadow-[2px_2px_0px_0px_#000]'
                : 'bg-neo-yellow text-black hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_#000]'
            ]"
          >
            {{ p.cta }}
          </a>
        </div>
      </div>

      <!-- Bottom Custom Consultation Banner -->
      <div class="mt-10 sm:mt-14 neo-box bg-neo-cyan text-black p-5 sm:p-8 border-3 sm:border-4 border-white shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff] flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div class="space-y-1 sm:space-y-2 text-center md:text-left">
          <h3 class="text-lg sm:text-2xl font-black text-black">
            Butuh Fitur Khusus atau Integrasi Sistem Custom?
          </h3>
          <p class="text-xs sm:text-sm font-bold text-slate-900 max-w-xl leading-relaxed">
            Kami melayani perancangan aplikasi khusus, integrasi Chatbot AI/LLM, CRM, multi-outlet, hingga arsitektur custom sesuai alur operasional bisnis Anda.
          </p>
        </div>
        <a
          :href="wa('Halo BantuBuatWeb, saya ingin diskusi kebutuhan custom / enterprise untuk transformasi digital bisnis saya')"
          target="_blank"
          rel="noopener"
          class="neo-btn bg-black text-white px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-black hover:bg-neo-yellow hover:text-black shrink-0 w-full md:w-auto text-center justify-center"
        >
          <AppIcon name="whatsapp" class="mr-2 h-4 w-4 shrink-0" />
          Diskusi Sistem Custom
        </a>
      </div>

    </div>
  </section>
</template>
