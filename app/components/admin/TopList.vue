<script setup lang="ts">
defineProps<{ title: string, columns: [string, string], rows: { label: string, value: number, sub?: string }[] }>()
</script>

<template>
  <section class="neo-box p-4 sm:p-5">
    <h2 class="mb-3 font-black">{{ title }}</h2>
    <table v-if="rows.length" class="admin-table">
      <thead><tr><th>{{ columns[0] }}</th><th class="text-right">{{ columns[1] }}</th></tr></thead>
      <tbody>
        <tr v-for="r in rows" :key="r.label">
          <td class="break-all">{{ r.label }}<span v-if="r.sub" class="block text-xs text-zinc-500">{{ r.sub }}</span></td>
          <td class="text-right font-bold tabular-nums">{{ r.value.toLocaleString('id-ID') }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-sm font-semibold text-zinc-600">Belum ada data di rentang ini.</p>
  </section>
</template>
