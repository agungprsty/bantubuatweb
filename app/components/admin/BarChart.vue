<script setup lang="ts">
// Grafik kolom harian satu seri. Judul (di luar komponen) menamai seri, jadi tanpa legend.
const props = defineProps<{ points: { date: string, value: number }[], color: string, label: string }>()

const el = ref<HTMLElement | null>(null)
const width = ref(600)
let observer: ResizeObserver | undefined
onMounted(() => {
  observer = new ResizeObserver(([entry]) => { width.value = entry!.contentRect.width })
  width.value = el.value!.clientWidth
  observer.observe(el.value!)
})
onBeforeUnmount(() => observer?.disconnect())

const H = 180
const PAD = { left: 36, top: 8, bottom: 24 }
const plotH = H - PAD.top - PAD.bottom
const plotW = computed(() => Math.max(width.value - PAD.left, 40))
const slot = computed(() => plotW.value / Math.max(props.points.length, 1))
// kolom maks 24px, sisa slot jadi jarak (min 2px)
const barW = computed(() => Math.max(Math.min(24, slot.value - 2), 1))

// puncak sumbu dibulatkan ke 1/2/5 × 10^k agar tick bersih
const max = computed(() => {
  const m = Math.max(...props.points.map((p) => p.value), 1)
  const k = 10 ** Math.floor(Math.log10(m))
  return [1, 2, 5, 10].map((s) => s * k).find((v) => v >= m)!
})
const ticks = computed(() => [0, max.value / 2, max.value].filter(Number.isInteger)
  .map((v) => ({ v, y: PAD.top + plotH - (v / max.value) * plotH })))

const bars = computed(() => props.points.map((p, i) => {
  const h = (p.value / max.value) * plotH
  const x = PAD.left + i * slot.value + (slot.value - barW.value) / 2
  return { ...p, i, x, y: PAD.top + plotH - h, h }
}))

// sudut atas membulat 4px, dasar tetap siku
function barPath(b: { x: number, y: number, h: number }) {
  if (b.h <= 0) return ''
  const w = barW.value
  const r = Math.min(4, b.h, w / 2)
  return `M${b.x},${b.y + b.h}V${b.y + r}Q${b.x},${b.y} ${b.x + r},${b.y}H${b.x + w - r}Q${b.x + w},${b.y} ${b.x + w},${b.y + r}V${b.y + b.h}Z`
}

const xLabels = computed(() => {
  const n = props.points.length
  return [...new Set([0, Math.floor((n - 1) / 2), n - 1])].filter((i) => i >= 0)
    .map((i) => ({ i, x: PAD.left + i * slot.value + slot.value / 2, text: tanggalPendek(props.points[i]!.date) }))
})

const active = ref<number | null>(null)
const tip = computed(() => {
  const b = active.value === null ? null : bars.value[active.value]
  if (!b) return null
  return { ...b, left: Math.min(Math.max(b.x + barW.value / 2, 64), width.value - 64) }
})

// keyboard: panah kiri/kanan berpindah kolom
function onKey(e: KeyboardEvent) {
  const n = props.points.length
  if (e.key === 'ArrowRight') active.value = Math.min((active.value ?? -1) + 1, n - 1)
  else if (e.key === 'ArrowLeft') active.value = Math.max((active.value ?? n) - 1, 0)
  else return
  e.preventDefault()
}
</script>

<template>
  <div>
    <!-- svg absolute: lebarnya mengikuti wadah, tidak ikut mendorong lebar kartu/grid -->
    <div ref="el" class="relative" :style="{ height: `${H}px` }">
      <svg
        :width="width"
        :height="H"
        class="absolute left-0 top-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-neo-pink"
        role="img"
        :aria-label="`${label} per hari. Gunakan panah kiri/kanan untuk membaca nilai.`"
        tabindex="0"
        @keydown="onKey"
        @focus="active = active ?? points.length - 1"
        @blur="active = null"
        @pointerleave="active = null"
      >
        <g v-for="t in ticks" :key="t.v">
          <line :x1="PAD.left" :x2="width" :y1="t.y" :y2="t.y" stroke="#e4e4e7" stroke-width="1" />
          <text :x="PAD.left - 6" :y="t.y + 4" text-anchor="end" class="fill-zinc-500 text-[11px] font-semibold tabular-nums">{{ angka(t.v) }}</text>
        </g>
        <path
          v-for="b in bars"
          :key="b.date"
          :d="barPath(b)"
          :fill="color"
          :opacity="active === null || active === b.i ? 1 : 0.55"
        />
        <!-- area hover selebar slot, lebih besar dari kolomnya -->
        <rect
          v-for="b in bars"
          :key="`hit-${b.date}`"
          :x="PAD.left + b.i * slot"
          :y="PAD.top"
          :width="slot"
          :height="plotH"
          fill="transparent"
          @pointerenter="active = b.i"
        />
        <text
          v-for="l in xLabels"
          :key="l.i"
          :x="l.x"
          :y="H - 6"
          :text-anchor="l.i === 0 ? 'start' : l.i === points.length - 1 ? 'end' : 'middle'"
          class="fill-zinc-500 text-[11px] font-semibold"
        >{{ l.text }}</text>
      </svg>

      <div
        v-if="tip"
        class="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg border-2 border-black bg-white px-2.5 py-1.5 text-xs shadow-neo-sm"
        :style="{ left: `${tip.left}px` }"
        aria-live="polite"
      >
        <p class="text-sm font-black">{{ tip.value.toLocaleString('id-ID') }}</p>
        <p class="flex items-center gap-1.5 font-semibold whitespace-nowrap text-zinc-600">
          <span class="inline-block h-0.5 w-3 rounded" :style="{ background: color }" />{{ label }} · {{ tanggal(tip.date) }}
        </p>
      </div>
    </div>

    <details class="mt-2 text-xs">
      <summary class="cursor-pointer font-bold text-zinc-600">Lihat data tabel</summary>
      <div class="mt-2 max-h-56 overflow-y-auto">
        <table class="admin-table">
          <thead><tr><th>Tanggal</th><th class="text-right">{{ label }}</th></tr></thead>
          <tbody>
            <tr v-for="p in points" :key="p.date"><td>{{ tanggal(p.date) }}</td><td class="text-right tabular-nums">{{ p.value }}</td></tr>
          </tbody>
        </table>
      </div>
    </details>
  </div>
</template>
