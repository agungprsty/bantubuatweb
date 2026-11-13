<script setup lang="ts">
defineProps<{ label: string, value: string, hint?: string, tone?: 'default' | 'warn' | 'good' | 'bad' }>()
</script>

<template>
  <div
    :class="[
      'neo-box p-4',
      tone === 'warn' && 'bg-neo-yellow',
      tone === 'good' && 'bg-neo-green',
      tone === 'bad' && 'bg-red-300',
    ]"
  >
    <p class="text-[11px] font-extrabold uppercase tracking-wide text-zinc-700">{{ label }}</p>
    <p class="mt-1 text-base font-black tabular-nums sm:text-xl">{{ value }}</p>
    <p v-if="hint" class="mt-0.5 text-xs font-semibold text-zinc-700">{{ hint }}</p>
  </div>
</template>
