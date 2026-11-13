<script setup lang="ts">
interface Expense { id: number, category: string, amount: number, date: string, note: string }

// projectId null = biaya umum
const props = defineProps<{ projectId: number | null, expenses: Expense[], title?: string }>()
const emit = defineEmits<{ changed: [] }>()

const blank = () => ({ category: 'domain', amount: 0, date: today(), note: '' })
const form = reactive(blank())
const editingId = ref<number | null>(null)
const showForm = ref(false)
const busy = ref(false)
const error = ref('')

function openForm(x?: Expense) {
  Object.assign(form, blank(), x ? { category: x.category, amount: x.amount, date: x.date, note: x.note } : {})
  editingId.value = x?.id ?? null
  error.value = ''
  showForm.value = true
}

async function call(fn: () => Promise<unknown>) {
  busy.value = true
  error.value = ''
  try {
    await fn()
    showForm.value = false
    emit('changed')
  } catch (e) {
    error.value = apiError(e)
  } finally {
    busy.value = false
  }
}

const save = () => call(() => editingId.value
  ? $fetch(`/api/admin/expenses/${editingId.value}`, { method: 'PUT', body: form })
  : $fetch('/api/admin/expenses', { method: 'POST', body: { ...form, project_id: props.projectId } }))

const remove = (x: Expense) => confirm(`Hapus biaya ${rupiah(x.amount)}?`) && call(() => $fetch(`/api/admin/expenses/${x.id}`, { method: 'DELETE' }))

const total = computed(() => props.expenses.reduce((t, x) => t + x.amount, 0))
const category = (c: string) => EXPENSE_CATEGORY[c as keyof typeof EXPENSE_CATEGORY] ?? c
</script>

<template>
  <section class="neo-box p-4 sm:p-5">
    <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
      <h2 class="font-black">{{ title ?? 'Biaya' }} <span v-if="expenses.length" class="text-sm font-bold text-zinc-600">· {{ rupiah(total) }}</span></h2>
      <button type="button" class="admin-btn bg-neo-yellow px-3 py-1.5" @click="openForm()">
        <AppIcon name="plus" class="h-4 w-4" /> Tambah biaya
      </button>
    </div>

    <div v-if="expenses.length" class="-mx-4 relative overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table class="admin-table min-w-[560px]">
        <thead>
          <tr><th>Tanggal</th><th>Kategori</th><th class="text-right">Nominal</th><th>Catatan</th><th><span class="sr-only">Aksi</span></th></tr>
        </thead>
        <tbody>
          <tr v-for="x in expenses" :key="x.id">
            <td class="whitespace-nowrap">{{ tanggal(x.date) }}</td>
            <td class="whitespace-nowrap font-bold">{{ category(x.category) }}</td>
            <td class="text-right font-bold whitespace-nowrap">{{ rupiah(x.amount) }}</td>
            <td class="text-zinc-700">{{ x.note || '–' }}</td>
            <td>
              <div class="flex justify-end gap-1.5">
                <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Edit biaya ${x.note || category(x.category)}`" @click="openForm(x)"><AppIcon name="pencil" class="h-3.5 w-3.5" /></button>
                <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Hapus biaya ${x.note || category(x.category)}`" :disabled="busy" @click="remove(x)"><AppIcon name="trash-2" class="h-3.5 w-3.5" /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="!showForm" class="text-sm font-semibold text-zinc-600">Belum ada biaya.</p>

    <form v-if="showForm" class="mt-4 grid gap-3 rounded-lg border-2 border-dashed border-black p-3 sm:grid-cols-3" @submit.prevent="save">
      <div>
        <label class="admin-label" for="exp-date">Tanggal *</label>
        <input id="exp-date" v-model="form.date" type="date" class="admin-input" required>
      </div>
      <div>
        <label class="admin-label" for="exp-cat">Kategori *</label>
        <select id="exp-cat" v-model="form.category" class="admin-input">
          <option v-for="(label, value) in EXPENSE_CATEGORY" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <div>
        <label class="admin-label" for="exp-amount">Nominal (Rp) *</label>
        <input id="exp-amount" v-model.number="form.amount" type="number" min="0" step="1" inputmode="numeric" class="admin-input" required>
        <p class="mt-1 text-xs font-bold text-zinc-600">{{ rupiah(form.amount || 0) }}</p>
      </div>
      <div class="sm:col-span-3">
        <label class="admin-label" for="exp-note">Catatan</label>
        <input id="exp-note" v-model="form.note" class="admin-input" maxlength="300">
      </div>
      <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold sm:col-span-3">{{ error }}</p>
      <div class="flex gap-2 sm:col-span-3">
        <button type="submit" class="admin-btn bg-neo-pink" :disabled="busy">{{ editingId ? 'Simpan' : 'Tambah' }}</button>
        <button type="button" class="admin-btn bg-white" @click="showForm = false">Batal</button>
      </div>
    </form>
    <p v-else-if="error" role="alert" class="mt-3 rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold">{{ error }}</p>
  </section>
</template>
