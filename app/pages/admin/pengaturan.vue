<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Pengaturan | Admin BantuBuatWeb' })

const tabs = { umum: 'Umum', paket: 'Paket Harga', faq: 'FAQ', akun: 'Akun' } as const
type Tab = keyof typeof tabs

const route = useRoute()
const tab = ref<Tab>(String(route.query.tab) in tabs ? (route.query.tab as Tab) : 'umum')
watch(tab, (t) => navigateTo({ query: t === 'umum' ? {} : { tab: t } }, { replace: true }))
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black sm:text-3xl">Pengaturan</h1>

    <div role="tablist" class="flex flex-wrap gap-1 border-b-2 border-zinc-800">
      <button
        v-for="(label, t) in tabs"
        :key="t"
        role="tab"
        type="button"
        :aria-selected="tab === t"
        :class="['-mb-0.5 shrink-0 rounded-t-lg border-2 border-b-0 px-2.5 py-2 text-sm font-extrabold sm:px-4', tab === t ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-transparent text-zinc-400 hover:text-white']"
        @click="tab = t"
      >
        {{ label }}
      </button>
    </div>

    <AdminSettingsForm v-if="tab === 'umum'" />
    <AdminPlanManager v-else-if="tab === 'paket'" />
    <AdminFaqManager v-else-if="tab === 'faq'" />
    <AdminPasswordForm v-else />
  </div>
</template>
