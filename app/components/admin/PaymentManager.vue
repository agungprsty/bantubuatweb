<script setup lang="ts">
interface Payment { id: number, label: string, amount: number, due_date: string | null, paid_date: string | null, method: string | null, status: 'belum' | 'lunas' }

const props = defineProps<{ projectId: number, payments: Payment[], net: number, scheduled: number }>()
const emit = defineEmits<{ changed: [] }>()

const blank = () => ({ label: '', amount: 0, due_date: '', paid_date: '', method: '', status: 'belum' as Payment['status'] })
const form = reactive(blank())
const editingId = ref<number | null>(null)
const showForm = ref(false)
const busy = ref(false)
const error = ref('')

function openForm(p?: Payment) {
  Object.assign(form, blank(), p ? { ...p, due_date: p.due_date ?? '', paid_date: p.paid_date ?? '', method: p.method ?? '' } : {})
  editingId.value = p?.id ?? null
  error.value = ''
  showForm.value = true
}

// termin lunas wajib punya tanggal bayar: isi hari ini sebagai default
watch(() => form.status, (s) => { if (s === 'lunas' && !form.paid_date) form.paid_date = today() })

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
  ? $fetch(`/api/admin/payments/${editingId.value}`, { method: 'PUT', body: form })
  : $fetch('/api/admin/payments', { method: 'POST', body: { ...form, project_id: props.projectId } }))

const markPaid = (p: Payment) => call(() => $fetch(`/api/admin/payments/${p.id}`, { method: 'PUT', body: { ...p, status: 'lunas', paid_date: today() } }))

const remove = (p: Payment) => confirm(`Hapus termin "${p.label}"?`) && call(() => $fetch(`/api/admin/payments/${p.id}`, { method: 'DELETE' }))

const overdue = (p: Payment) => p.status === 'belum' && !!p.due_date && p.due_date < today()
</script>

<template>
  <section class="neo-box p-4 sm:p-5">
    <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
      <h2 class="font-black">Termin Pembayaran</h2>
      <button type="button" class="admin-btn bg-neo-yellow px-3 py-1.5" @click="openForm()">
        <AppIcon name="plus" class="h-4 w-4" /> Tambah termin
      </button>
    </div>

    <p v-if="payments.length && scheduled !== net" class="mb-3 rounded-lg border-2 border-black bg-neo-yellow/60 px-3 py-2 text-xs font-bold">
      Total termin {{ rupiah(scheduled) }} belum sama dengan kontrak bersih {{ rupiah(net) }}.
    </p>

    <div v-if="payments.length" class="-mx-4 relative overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table class="admin-table min-w-[640px]">
        <thead>
          <tr><th>Termin</th><th class="text-right">Nominal</th><th>Jatuh tempo</th><th>Status</th><th>Dibayar</th><th><span class="sr-only">Aksi</span></th></tr>
        </thead>
        <tbody>
          <tr v-for="p in payments" :key="p.id">
            <td class="font-bold">{{ p.label }}</td>
            <td class="text-right font-bold whitespace-nowrap">{{ rupiah(p.amount) }}</td>
            <td :class="['whitespace-nowrap', overdue(p) && 'font-black text-red-600']">
              {{ tanggal(p.due_date) }}<span v-if="overdue(p)"> · terlambat</span>
            </td>
            <td>
              <span :class="['neo-badge whitespace-nowrap', p.status === 'lunas' ? 'bg-neo-green' : 'bg-zinc-200']">{{ PAYMENT_STATUS[p.status] }}</span>
            </td>
            <td class="whitespace-nowrap">{{ tanggal(p.paid_date) }}<span v-if="p.method" class="block text-xs text-zinc-500">{{ p.method }}</span></td>
            <td>
              <div class="flex justify-end gap-1.5">
                <button v-if="p.status === 'belum'" type="button" class="admin-btn bg-neo-green px-2 py-1 text-xs" :disabled="busy" @click="markPaid(p)">Lunas</button>
                <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Edit ${p.label}`" @click="openForm(p)"><AppIcon name="pencil" class="h-3.5 w-3.5" /></button>
                <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Hapus ${p.label}`" :disabled="busy" @click="remove(p)"><AppIcon name="trash-2" class="h-3.5 w-3.5" /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else-if="!showForm" class="text-sm font-semibold text-zinc-600">Belum ada termin. Contoh: DP 50% dan Pelunasan.</p>

    <form v-if="showForm" class="mt-4 grid gap-3 rounded-lg border-2 border-dashed border-black p-3 sm:grid-cols-3" @submit.prevent="save">
      <div>
        <label class="admin-label" for="pay-label">Nama termin *</label>
        <input id="pay-label" v-model="form.label" class="admin-input" required maxlength="80" placeholder="DP 50%">
      </div>
      <div>
        <label class="admin-label" for="pay-amount">Nominal (Rp) *</label>
        <input id="pay-amount" v-model.number="form.amount" type="number" min="0" step="1" inputmode="numeric" class="admin-input" required>
        <p class="mt-1 text-xs font-bold text-zinc-600">{{ rupiah(form.amount || 0) }}</p>
      </div>
      <div>
        <label class="admin-label" for="pay-due">Jatuh tempo</label>
        <input id="pay-due" v-model="form.due_date" type="date" class="admin-input">
      </div>
      <div>
        <label class="admin-label" for="pay-status">Status</label>
        <select id="pay-status" v-model="form.status" class="admin-input">
          <option v-for="(label, value) in PAYMENT_STATUS" :key="value" :value="value">{{ label }}</option>
        </select>
      </div>
      <template v-if="form.status === 'lunas'">
        <div>
          <label class="admin-label" for="pay-paid">Tanggal bayar *</label>
          <input id="pay-paid" v-model="form.paid_date" type="date" class="admin-input" required>
        </div>
        <div>
          <label class="admin-label" for="pay-method">Metode</label>
          <input id="pay-method" v-model="form.method" class="admin-input" maxlength="60" placeholder="Transfer BCA">
        </div>
      </template>
      <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold sm:col-span-3">{{ error }}</p>
      <div class="flex gap-2 sm:col-span-3">
        <button type="submit" class="admin-btn bg-neo-pink" :disabled="busy">{{ editingId ? 'Simpan' : 'Tambah' }}</button>
        <button type="button" class="admin-btn bg-white" @click="showForm = false">Batal</button>
      </div>
    </form>
    <p v-else-if="error" role="alert" class="mt-3 rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold">{{ error }}</p>
  </section>
</template>
