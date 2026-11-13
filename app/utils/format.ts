const idr = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
export const rupiah = (n: number | null | undefined) => idr.format(n ?? 0)

export const tanggal = (d: string | null | undefined) =>
  d ? new Date(`${d}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '–'

export const tanggalPendek = (d: string) =>
  new Date(`${d}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })

const compact = new Intl.NumberFormat('id-ID', { notation: 'compact' })
export const angka = (n: number) => (n >= 1000 ? compact.format(n) : String(n))

export const bulan = (ym: string) =>
  new Date(`${ym}-01T00:00:00`).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })

// YYYY-MM-DD menurut jam lokal browser
export const today = () => new Date().toLocaleDateString('sv-SE')
export const hariLalu = (n: number) => {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toLocaleDateString('sv-SE')
}

export const apiError = (e: any) => e?.data?.message || e?.message || 'Terjadi kesalahan, coba lagi'
