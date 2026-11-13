<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Dashboard | Admin BantuBuatWeb' })

const [{ data: stats, error: statsError }, { data: summary, error: summaryError }] = await Promise.all([
  useFetch('/api/admin/analytics', { query: { from: hariLalu(29), to: today() } }),
  useFetch('/api/admin/dashboard'),
])
const error = computed(() => statsError.value || summaryError.value)
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-black sm:text-3xl">Dashboard</h1>
      <NuxtLink to="/admin/analitik" class="text-sm font-bold text-zinc-300 underline-offset-4 hover:text-white hover:underline">Analitik lengkap →</NuxtLink>
    </div>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ apiError(error) }}</p>

    <div class="grid grid-cols-2 gap-3 lg:grid-cols-3 2xl:grid-cols-6">
      <template v-if="stats">
        <AdminStat label="Pengunjung 30 hari" :value="stats.totals.visitors.toLocaleString('id-ID')" hint="Dihitung unik per hari" />
        <AdminStat label="Klik WhatsApp" :value="stats.totals.waClicks.toLocaleString('id-ID')" hint="30 hari terakhir" />
        <AdminStat label="Konversi" :value="`${stats.totals.conversion.toLocaleString('id-ID')}%`" hint="Pengunjung yang klik WA" />
      </template>
      <template v-if="summary">
        <NuxtLink to="/admin/proyek" class="block">
          <AdminStat label="Proyek berjalan" :value="String(summary.activeProjects)" hint="Deal, dikerjakan, review" class="h-full" />
        </NuxtLink>
        <NuxtLink to="/admin/keuangan" class="block">
          <AdminStat label="Sisa piutang" :value="rupiah(summary.receivable)" :tone="summary.receivable ? 'warn' : 'default'" class="h-full" />
        </NuxtLink>
        <NuxtLink to="/admin/testimoni" class="block">
          <AdminStat
            label="Testimoni menunggu"
            :value="String(summary.pendingTestimonials)"
            :hint="summary.pendingTestimonials ? 'Perlu ditinjau' : 'Semua sudah ditinjau'"
            :tone="summary.pendingTestimonials ? 'warn' : 'default'"
            class="h-full"
          />
        </NuxtLink>
      </template>
    </div>

    <div v-if="stats" class="grid gap-5 xl:grid-cols-2">
      <section class="neo-box p-4 sm:p-5">
        <h2 class="mb-3 font-black">Pengunjung per hari</h2>
        <AdminBarChart :points="stats.daily.map((d) => ({ date: d.date, value: d.visitors }))" color="#23A6F0" label="Pengunjung" />
      </section>
      <section class="neo-box p-4 sm:p-5">
        <h2 class="mb-3 font-black">Klik WhatsApp per hari</h2>
        <AdminBarChart :points="stats.daily.map((d) => ({ date: d.date, value: d.waClicks }))" color="#23C552" label="Klik WA" />
      </section>
    </div>
  </div>
</template>
