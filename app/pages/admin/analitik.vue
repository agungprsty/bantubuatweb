<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Analitik | Admin BantuBuatWeb' })

const presets = [7, 30, 90] as const
const preset = ref<number | 'kustom'>(30)
const range = reactive({ from: hariLalu(29), to: today() })
function choose(days: number) {
  preset.value = days
  Object.assign(range, { from: hariLalu(days - 1), to: today() })
}

const { data, error, pending } = await useFetch('/api/admin/analytics', { query: range })

const DEVICE: Record<string, string> = { mobile: 'HP', tablet: 'Tablet', desktop: 'Desktop' }
const lists = computed(() => {
  const d = data.value
  if (!d) return []
  return [
    { title: 'Halaman teratas', columns: ['Halaman', 'Dilihat'], rows: d.pages.map((p) => ({ label: p.path, value: p.pageviews, sub: `${p.visitors} pengunjung` })) },
    { title: 'Sumber trafik', columns: ['Sumber', 'Kunjungan'], rows: d.sources.map((s) => ({ label: s.source, value: s.visits })) },
    { title: 'Kampanye UTM', columns: ['Kampanye', 'Kunjungan'], rows: d.campaigns.map((c) => ({ label: c.campaign, value: c.visits, sub: [c.source, c.medium].filter(Boolean).join(' / ') })) },
    { title: 'Perangkat', columns: ['Perangkat', 'Pengunjung'], rows: d.devices.map((x) => ({ label: DEVICE[x.device] ?? x.device, value: x.visitors })) },
    { title: 'Klik WhatsApp per halaman', columns: ['Halaman', 'Klik'], rows: d.waPages.map((p) => ({ label: p.path, value: p.clicks })) },
    { title: 'Klik WhatsApp per tombol', columns: ['Tombol', 'Klik'], rows: d.waLabels.map((l) => ({ label: l.label ?? '(tanpa label)', value: l.clicks })) },
  ] as { title: string, columns: [string, string], rows: { label: string, value: number, sub?: string }[] }[]
})
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black sm:text-3xl">Analitik</h1>

    <!-- Filter rentang: satu baris, berlaku untuk semua angka di bawahnya -->
    <div class="flex flex-wrap items-end gap-2" role="group" aria-label="Rentang tanggal">
      <button
        v-for="d in presets"
        :key="d"
        type="button"
        :aria-pressed="preset === d"
        :class="['rounded-lg border-2 px-3 py-1.5 text-sm font-extrabold', preset === d ? 'border-black bg-neo-yellow text-black shadow-neo-sm' : 'border-zinc-700 text-zinc-300 hover:text-white']"
        @click="choose(d)"
      >
        {{ d }} hari
      </button>
      <button
        type="button"
        :aria-pressed="preset === 'kustom'"
        :class="['rounded-lg border-2 px-3 py-1.5 text-sm font-extrabold', preset === 'kustom' ? 'border-black bg-neo-yellow text-black shadow-neo-sm' : 'border-zinc-700 text-zinc-300 hover:text-white']"
        @click="preset = 'kustom'"
      >
        Kustom
      </button>
      <template v-if="preset === 'kustom'">
        <label class="sr-only" for="a-from">Dari</label>
        <input id="a-from" v-model="range.from" type="date" :max="range.to" class="admin-input w-auto py-1.5">
        <span class="self-center text-sm font-bold text-zinc-400">–</span>
        <label class="sr-only" for="a-to">Sampai</label>
        <input id="a-to" v-model="range.to" type="date" :min="range.from" :max="today()" class="admin-input w-auto py-1.5">
      </template>
    </div>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ apiError(error) }}</p>

    <!-- data lama tetap tampil (redup) selama memuat ulang -->
    <div v-if="data" :class="['space-y-5 transition-opacity', pending && 'opacity-50']">
      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <AdminStat label="Pengunjung" :value="data.totals.visitors.toLocaleString('id-ID')" hint="Dihitung unik per hari" />
        <AdminStat label="Halaman dilihat" :value="data.totals.pageviews.toLocaleString('id-ID')" />
        <AdminStat label="Klik WhatsApp" :value="data.totals.waClicks.toLocaleString('id-ID')" />
        <AdminStat label="Konversi" :value="`${data.totals.conversion.toLocaleString('id-ID')}%`" hint="Pengunjung yang klik WA" />
      </div>

      <div class="grid gap-5 xl:grid-cols-2">
        <section class="neo-box p-4 sm:p-5">
          <h2 class="mb-3 font-black">Pengunjung per hari</h2>
          <AdminBarChart :points="data.daily.map((d) => ({ date: d.date, value: d.visitors }))" color="#23A6F0" label="Pengunjung" />
        </section>
        <section class="neo-box p-4 sm:p-5">
          <h2 class="mb-3 font-black">Klik WhatsApp per hari</h2>
          <AdminBarChart :points="data.daily.map((d) => ({ date: d.date, value: d.waClicks }))" color="#23C552" label="Klik WA" />
        </section>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <AdminTopList v-for="l in lists" :key="l.title" :title="l.title" :columns="l.columns" :rows="l.rows" />
      </div>
    </div>
  </div>
</template>
