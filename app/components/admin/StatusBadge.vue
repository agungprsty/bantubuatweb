<script setup lang="ts">
defineProps<{ status: ProjectStatus }>()

const colors: Record<ProjectStatus, string> = {
  lead: 'bg-zinc-200',
  negosiasi: 'bg-sky-200',
  deal: 'bg-neo-yellow',
  dikerjakan: 'bg-orange-300',
  review: 'bg-violet-300',
  selesai: 'bg-neo-green',
  maintenance: 'bg-teal-200',
  batal: 'bg-red-300',
}
</script>

<template>
  <span :class="['neo-badge whitespace-nowrap text-black', colors[status]]">{{ PROJECT_STATUS[status] }}</span>
</template>
