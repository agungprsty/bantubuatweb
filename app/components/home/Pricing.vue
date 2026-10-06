<script setup lang="ts">
import { HOME_PLANS } from '~/data/homeData'
</script>

<template>
  <section id="harga" class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Pilihan Paket</h2>
        <p class="text-base font-bold text-zinc-400">Semua paket sudah termasuk gratis domain, hosting cepat &amp; garansi 30 hari.</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(p, idx) in HOME_PLANS"
          :key="idx"
          :class="[
            'neo-box p-6 flex flex-col justify-between relative border-2',
            p.featured ? 'border-4 shadow-[8px_8px_0px_0px_#fff] ring-4 ring-white/20' : 'shadow-[4px_4px_0px_0px_#fff]',
            p.color
          ]"
        >
          <span v-if="p.badge" class="absolute -top-4 right-4 rounded-full border-2 border-black bg-neo-yellow px-3 py-1 font-black text-xs text-black shadow-[2px_2px_0px_0px_#000]">
            {{ p.badge }}
          </span>

          <div>
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-2xl font-black">{{ p.name }}</h3>
              <img :src="p.icon" class="h-8 w-8 object-contain" :alt="p.name" />
            </div>
            
            <p class="text-xs font-bold opacity-80 mt-1 mb-4 min-h-[2.5rem]">{{ p.desc }}</p>

            <div class="mb-6 border-b-2 border-current pb-4">
              <div class="text-3xl sm:text-4xl font-black">{{ p.price }}</div>
              <div v-if="p.original" class="text-xs font-extrabold opacity-60 line-through">{{ p.original }}</div>
              <div class="text-[11px] font-extrabold opacity-90 mt-1">{{ p.renewal }}</div>
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="(perk, i) in p.perks" :key="i" class="flex items-start text-sm font-extrabold">
                <span class="mr-2 font-black">✓</span>
                <span>{{ perk }}</span>
              </li>
            </ul>
          </div>

          <a
            :href="wa(`Halo BantuBuatWeb, saya mau pesan paket ${p.name}`)"
            target="_blank"
            rel="noopener"
            :class="[
              'neo-btn w-full py-3 text-sm font-black',
              p.featured ? 'bg-black text-white hover:bg-neo-yellow hover:text-black' : 'bg-neo-yellow text-black hover:bg-black hover:text-white'
            ]"
          >
            {{ p.cta }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
