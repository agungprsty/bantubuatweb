<script setup lang="ts">
import { ref } from 'vue'
import { HOME_FAQ } from '~/data/homeData'

// Open the first item by default, or null if all closed
const openIndex = ref<number | null>(0)

const toggleFaq = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Pertanyaan Yang Sering Diajukan</h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="(f, idx) in HOME_FAQ"
          :key="idx"
          class="neo-box bg-white text-black transition-all duration-200 overflow-hidden"
        >
          <button
            type="button"
            @click="toggleFaq(idx)"
            class="w-full text-left p-6 flex items-center justify-between gap-4 select-none focus:outline-none cursor-pointer group"
            :aria-expanded="openIndex === idx"
          >
            <div class="flex items-center gap-3">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-black bg-neo-yellow text-xs font-black shadow-[2px_2px_0px_0px_#000]">
                Q
              </span>
              <h3 class="text-base sm:text-lg font-black text-black group-hover:text-amber-900 transition-colors">
                {{ f.q }}
              </h3>
            </div>
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black font-bold text-sm transition-all duration-200 shadow-[2px_2px_0px_0px_#000]"
              :class="openIndex === idx ? 'bg-neo-pink rotate-180' : 'bg-zinc-100 group-hover:bg-zinc-200'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 stroke-[3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="openIndex === idx" class="px-6 pb-6 pt-1 border-t-2 border-dashed border-zinc-200">
              <p class="text-sm sm:text-base font-bold text-slate-700 leading-relaxed pl-10 border-l-3 border-black ml-3 pt-2">
                {{ f.a }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

