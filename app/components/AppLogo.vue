<script setup lang="ts">
withDefaults(defineProps<{
  light?: boolean
}>(), { light: false })
</script>

<template>
  <span class="inline-flex select-none items-center gap-2.5">
    <!-- Neo Brutal Icon Box -->
    <span
      :class="[
        'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-black font-black text-black shadow-[2px_2px_0px_0px_#000] transition-transform group-hover:-rotate-6',
        light ? 'bg-neo-yellow' : 'bg-neo-pink'
      ]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </span>

    <!-- Logo Text -->
    <span class="flex flex-col justify-center leading-none">
      <span
        :class="[
          'text-base sm:text-lg font-black tracking-tight',
          light ? 'text-white' : 'text-black'
        ]"
      >
        bantu<span class="ml-0.5 rounded border border-black bg-neo-yellow px-1.5 py-0.5 text-black shadow-[1.5px_1.5px_0px_0px_#000]">buatweb</span>
      </span>
      <span
        :class="[
          'mt-1 text-[10px] font-extrabold uppercase tracking-wider',
          light ? 'text-neo-pink' : 'text-slate-700'
        ]"
      >
        Jasa Website Indonesia
      </span>
    </span>
  </span>
</template>