<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  class?: string
}>(), { class: 'h-6 w-6' })

const icons = {
  menu: 'lucide:menu',
  x: 'lucide:x',
  check: 'lucide:check',
  arrowRight: 'lucide:arrow-right',
  code: 'lucide:code',
  rocket: 'lucide:rocket',
  smartphone: 'lucide:smartphone',
  gauge: 'lucide:gauge',
  globe: 'lucide:globe',
  mapPin: 'lucide:map-pin',
  phone: 'lucide:phone',
  mail: 'lucide:mail',
  quote: 'lucide:quote',
  shoppingBag: 'lucide:shopping-bag',
  building: 'lucide:building',
  megaphone: 'lucide:megaphone',
  landmark: 'lucide:landmark',
  users: 'lucide:users',
  graduationCap: 'lucide:graduation-cap',
  newspaper: 'lucide:newspaper',
  home: 'lucide:home',
  bed: 'lucide:bed',
  heartPulse: 'lucide:heart-pulse',
  utensils: 'lucide:utensils',
  handHeart: 'lucide:hand-heart',
  layers: 'lucide:layers',
  star: 'ph:star-fill',
  whatsapp: 'mdi:whatsapp',
  instagram: 'lucide:instagram',
  facebook: 'lucide:facebook',
  linkedin: 'lucide:linkedin',
  bot: 'lucide:bot',
  sparkles: 'lucide:sparkles',
  search: 'lucide:search',
  creditCard: 'lucide:credit-card',
  truck: 'lucide:truck',
  cpu: 'lucide:cpu',
  zap: 'lucide:zap',
  database: 'lucide:database',
  workflow: 'lucide:workflow',
  shieldCheck: 'lucide:shield-check',
  trendingUp: 'lucide:trending-up',
}

const iconId = computed(() => icons[props.name] || `lucide:${props.name}`)
</script>

<template>
  <Icon :name="iconId" :class="class" />
</template>