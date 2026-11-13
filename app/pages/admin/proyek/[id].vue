<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const route = useRoute()
const isNew = route.params.id === 'baru'
const tab = ref<'detail' | 'anggaran'>(route.query.tab === 'anggaran' ? 'anggaran' : 'detail')

const { data, error, refresh } = await useFetch(`/api/admin/projects/${route.params.id}`, { immediate: !isNew })
const project = computed(() => data.value?.project)

useHead({ title: () => `${isNew ? 'Proyek baru' : project.value?.title ?? 'Proyek'} | Admin BantuBuatWeb` })

watch(tab, (t) => navigateTo({ query: t === 'anggaran' ? { tab: t } : {} }, { replace: true }))
</script>

<template>
  <div class="space-y-5">
    <NuxtLink to="/admin/proyek" class="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-400 hover:text-white">
      <AppIcon name="arrow-left" class="h-4 w-4" /> Semua proyek
    </NuxtLink>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ apiError(error) }}</p>

    <template v-if="isNew">
      <h1 class="text-2xl font-black sm:text-3xl">Proyek baru</h1>
      <AdminProjectForm />
    </template>

    <template v-else-if="project && data">
      <div class="flex flex-wrap items-center gap-3">
        <h1 class="text-2xl font-black break-words sm:text-3xl">{{ project.title }}</h1>
        <AdminStatusBadge :status="project.status" />
      </div>

      <div role="tablist" class="flex gap-2 border-b-2 border-zinc-800">
        <button
          v-for="t in (['detail', 'anggaran'] as const)"
          :key="t"
          role="tab"
          type="button"
          :aria-selected="tab === t"
          :class="['-mb-0.5 rounded-t-lg border-2 border-b-0 px-4 py-2 text-sm font-extrabold capitalize', tab === t ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-transparent text-zinc-400 hover:text-white']"
          @click="tab = t"
        >
          {{ t }}
        </button>
      </div>

      <template v-if="tab === 'detail'">
        <AdminTestimonialLink :project="project" />
        <AdminProjectForm :project="project" @saved="refresh" />
      </template>

      <div v-else class="space-y-5">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
          <AdminStat label="Kontrak bersih" :value="rupiah(project.net)" />
          <AdminStat label="Diterima" :value="rupiah(project.received)" />
          <AdminStat label="Sisa piutang" :value="rupiah(project.receivable)" :tone="project.receivable ? 'warn' : 'default'" />
          <AdminStat label="Biaya" :value="rupiah(project.cost)" />
          <AdminStat
            label="Margin"
            :value="rupiah(project.margin)"
            :hint="project.marginPct === null ? undefined : `${project.marginPct}% dari kontrak`"
            :tone="project.margin < 0 ? 'bad' : 'default'"
            class="col-span-2 sm:col-span-1"
          />
        </div>
        <AdminPaymentManager :project-id="project.id" :payments="data.payments" :net="project.net" :scheduled="project.scheduled" @changed="refresh" />
        <AdminExpenseManager :project-id="project.id" :expenses="data.expenses" title="Biaya proyek" @changed="refresh" />
      </div>
    </template>
  </div>
</template>
