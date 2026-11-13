<script setup lang="ts">
import { SERVICES, serviceBySlug } from '~/data/services'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Proyek | Admin BantuBuatWeb' })

const { data: projects, error } = await useFetch('/api/admin/projects', { default: () => [] })

const q = ref('')
const status = ref('')
const service = ref('')

const filtered = computed(() => {
  const term = q.value.trim().toLowerCase()
  return projects.value.filter((p) =>
    (!status.value || p.status === status.value)
    && (!service.value || p.service_slug === service.value)
    && (!term || `${p.title} ${p.client_name}`.toLowerCase().includes(term)))
})

const active = computed(() => projects.value.filter((p) => ['deal', 'dikerjakan', 'review'].includes(p.status)).length)
const receivable = computed(() => projects.value.reduce((t, p) => t + p.receivable, 0))
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-black sm:text-3xl">Proyek</h1>
      <NuxtLink to="/admin/proyek/baru" class="admin-btn bg-neo-pink">
        <AppIcon name="plus" class="h-4 w-4" /> Proyek baru
      </NuxtLink>
    </div>

    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <AdminStat label="Total proyek" :value="String(projects.length)" />
      <AdminStat label="Sedang berjalan" :value="String(active)" hint="Deal, dikerjakan, review" />
      <AdminStat label="Sisa piutang" :value="rupiah(receivable)" :tone="receivable ? 'warn' : 'default'" class="col-span-2 sm:col-span-1" />
    </div>

    <div class="neo-box grid gap-3 p-4 sm:grid-cols-3">
      <div>
        <label class="admin-label" for="q">Cari</label>
        <input id="q" v-model="q" type="search" class="admin-input" placeholder="Nama proyek / klien">
      </div>
      <div>
        <label class="admin-label" for="f-status">Status</label>
        <select id="f-status" v-model="status" class="admin-input">
          <option value="">Semua status</option>
          <option v-for="(label, value) in PROJECT_STATUS" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <div>
        <label class="admin-label" for="f-service">Kategori</label>
        <select id="f-service" v-model="service" class="admin-input">
          <option value="">Semua kategori</option>
          <option v-for="s in SERVICES" :key="s.slug" :value="s.slug">{{ s.title }}</option>
        </select>
      </div>
    </div>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ apiError(error) }}</p>

    <!-- HP, tablet, laptop kecil: kartu -->
    <ul class="grid gap-3 sm:grid-cols-2 xl:hidden">
      <li v-for="p in filtered" :key="p.id">
        <NuxtLink :to="`/admin/proyek/${p.id}`" class="neo-box block h-full p-4 active:bg-zinc-50">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-black">{{ p.title }}</p>
              <p v-if="p.client_name && p.client_name !== p.title" class="truncate text-xs text-zinc-600">{{ p.client_name }}</p>
            </div>
            <AdminStatusBadge :status="p.status" class="shrink-0" />
          </div>
          <dl class="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
            <dt class="text-zinc-600">Kontrak</dt><dd class="text-right font-bold">{{ rupiah(p.net) }}</dd>
            <dt class="text-zinc-600">Piutang</dt><dd :class="['text-right', p.receivable ? 'font-black' : 'font-bold']">{{ rupiah(p.receivable) }}</dd>
            <template v-if="p.due_date">
              <dt class="text-zinc-600">Target</dt><dd class="text-right font-bold">{{ tanggal(p.due_date) }}</dd>
            </template>
          </dl>
          <span v-if="p.is_public" class="mt-2 inline-block rounded-full border border-black bg-neo-cyan px-1.5 text-[10px] font-extrabold uppercase leading-4">Portofolio</span>
        </NuxtLink>
      </li>
      <li v-if="!filtered.length" class="neo-box p-6 text-center sm:col-span-full text-sm font-semibold text-zinc-600">Tidak ada proyek yang cocok.</li>
    </ul>

    <!-- Desktop: tabel -->
    <div class="neo-box hidden overflow-hidden xl:block">
      <div class="relative overflow-x-auto">
        <table class="admin-table min-w-[640px]">
          <thead>
            <tr>
              <th>Proyek</th><th>Kategori</th><th>Status</th><th>Target</th>
              <th class="text-right">Kontrak</th><th class="text-right">Diterima</th><th class="text-right">Piutang</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in filtered" :key="p.id" class="hover:bg-zinc-50">
              <td>
                <NuxtLink :to="`/admin/proyek/${p.id}`" class="font-black underline-offset-2 hover:underline">{{ p.title }}</NuxtLink>
                <span v-if="p.is_public" class="ml-1.5 inline-block rounded-full border border-black bg-neo-cyan px-1.5 align-middle text-[10px] font-extrabold uppercase leading-4">Portofolio</span>
                <span v-if="p.client_name && p.client_name !== p.title" class="block text-xs text-zinc-600">{{ p.client_name }}</span>
              </td>
              <td class="text-xs">{{ (p.service_slug && serviceBySlug(p.service_slug)?.title) || '–' }}</td>
              <td><AdminStatusBadge :status="p.status" /></td>
              <td class="whitespace-nowrap">{{ tanggal(p.due_date) }}</td>
              <td class="text-right whitespace-nowrap">{{ rupiah(p.net) }}</td>
              <td class="text-right whitespace-nowrap">{{ rupiah(p.received) }}</td>
              <td :class="['text-right whitespace-nowrap', p.receivable && 'font-black']">{{ rupiah(p.receivable) }}</td>
            </tr>
            <tr v-if="!filtered.length">
              <td colspan="7" class="py-8 text-center font-semibold text-zinc-600">Tidak ada proyek yang cocok.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
