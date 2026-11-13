<script setup lang="ts">
import { serviceBySlug } from '~/data/services'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Keuangan | Admin BantuBuatWeb' })

const { data: summary, error, refresh } = await useFetch('/api/admin/finance/summary')
const { data: general, refresh: refreshGeneral } = await useFetch('/api/admin/expenses', { query: { umum: '1' }, default: () => [] })

const totals = computed(() => summary.value?.totals)
const margin = computed(() => totals.value ? totals.value.contract - totals.value.cost : 0)

const onExpenseChanged = () => Promise.all([refresh(), refreshGeneral()])
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black sm:text-3xl">Keuangan</h1>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ apiError(error) }}</p>

    <template v-if="summary && totals">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        <AdminStat label="Nilai kontrak" :value="rupiah(totals.contract)" hint="Proyek berstatus deal ke atas" />
        <AdminStat label="Diterima" :value="rupiah(totals.received)" />
        <AdminStat label="Piutang berjalan" :value="rupiah(totals.receivable)" :tone="totals.receivable ? 'warn' : 'default'" />
        <AdminStat label="Total biaya" :value="rupiah(totals.cost)" :hint="`Umum ${rupiah(totals.generalCost)}`" />
        <AdminStat label="Margin" :value="rupiah(margin)" hint="Kontrak − semua biaya" :tone="margin < 0 ? 'bad' : 'default'" class="col-span-2 sm:col-span-1" />
      </div>

      <div class="grid gap-5 2xl:grid-cols-2">
        <section class="neo-box p-4 sm:p-5">
          <h2 class="mb-3 font-black">Arus kas 12 bulan</h2>
          <div class="-mx-4 relative overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table class="admin-table min-w-[420px]">
              <thead>
                <tr><th>Bulan</th><th class="text-right">Pemasukan</th><th class="text-right">Biaya</th><th class="text-right">Selisih</th></tr>
              </thead>
              <tbody>
                <tr v-for="m in summary.months" :key="m.month">
                  <td class="whitespace-nowrap font-bold">{{ bulan(m.month) }}</td>
                  <td class="text-right whitespace-nowrap">{{ rupiah(m.income) }}</td>
                  <td class="text-right whitespace-nowrap">{{ rupiah(m.cost) }}</td>
                  <td :class="['text-right whitespace-nowrap font-bold', m.income - m.cost < 0 && 'text-red-600']">{{ rupiah(m.income - m.cost) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-2 text-xs font-semibold text-zinc-600">Pemasukan dihitung dari termin lunas berdasarkan tanggal bayar.</p>
        </section>

        <section class="neo-box p-4 sm:p-5">
          <h2 class="mb-3 font-black">Margin per kategori layanan</h2>
          <div v-if="summary.byService.length" class="-mx-4 relative overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table class="admin-table min-w-[480px]">
              <thead>
                <tr><th>Kategori</th><th class="text-right">Proyek</th><th class="text-right">Kontrak</th><th class="text-right">Biaya</th><th class="text-right">Margin</th></tr>
              </thead>
              <tbody>
                <tr v-for="s in summary.byService" :key="s.slug ?? '-'">
                  <td class="font-bold">{{ (s.slug && serviceBySlug(s.slug)?.title) || 'Tanpa kategori' }}</td>
                  <td class="text-right">{{ s.count }}</td>
                  <td class="text-right whitespace-nowrap">{{ rupiah(s.net) }}</td>
                  <td class="text-right whitespace-nowrap">{{ rupiah(s.cost) }}</td>
                  <td class="text-right whitespace-nowrap font-bold">
                    {{ rupiah(s.margin) }}
                    <span v-if="s.net" class="block text-xs font-semibold text-zinc-600">{{ Math.round((s.margin / s.net) * 1000) / 10 }}%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else class="text-sm font-semibold text-zinc-600">Belum ada proyek berstatus deal.</p>
        </section>
      </div>
    </template>

    <AdminExpenseManager :project-id="null" :expenses="general" title="Biaya umum" @changed="onExpenseChanged" />
  </div>
</template>
