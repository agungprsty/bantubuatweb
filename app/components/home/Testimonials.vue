<script setup lang="ts">
import { HOME_TESTIMONIALS } from '~/data/homeData'
</script>

<template>
  <section class="border-b-2 border-zinc-800 bg-black py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Apa Kata Klien Tentang <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
      </div>

      <div class="grid gap-5 sm:gap-6 md:grid-cols-3">
        <div v-for="(t, idx) in HOME_TESTIMONIALS" :key="idx" class="neo-box bg-white text-black p-4 sm:p-6 flex flex-col justify-between">
          <div class="space-y-3">
            <p class="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed italic">"{{ t.quote }}"</p>
          </div>

          <div class="flex items-center gap-3 pt-4 sm:pt-6 border-t-2 border-black mt-4 sm:mt-6">
            <img :src="t.avatar" class="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black object-cover bg-neo-yellow shrink-0" :alt="t.name" />
            <div>
              <div class="font-black text-xs sm:text-sm text-black leading-none">{{ t.name }}</div>
              <div class="text-[11px] sm:text-xs font-bold text-slate-700 mt-1">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
