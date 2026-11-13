// Dipakai server (validasi) dan halaman admin (pilihan & label).

export const PROJECT_STATUS = {
  lead: 'Lead',
  negosiasi: 'Negosiasi',
  deal: 'Deal',
  dikerjakan: 'Dikerjakan',
  review: 'Review',
  selesai: 'Selesai',
  maintenance: 'Maintenance',
  batal: 'Batal',
} as const
export type ProjectStatus = keyof typeof PROJECT_STATUS

// status yang sudah deal: nilai kontraknya dihitung sebagai pendapatan & piutang
export const BILLABLE_STATUSES: ProjectStatus[] = ['deal', 'dikerjakan', 'review', 'selesai', 'maintenance']

export const PAYMENT_STATUS = { belum: 'Belum dibayar', lunas: 'Lunas' } as const

export const EXPENSE_CATEGORY = {
  domain: 'Domain',
  hosting: 'Hosting',
  lisensi: 'Lisensi / Plugin',
  api: 'API / AI Credit',
  freelancer: 'Freelancer',
  iklan: 'Iklan',
  lain: 'Lain-lain',
} as const

// Kelas Tailwind harus tertulis di source agar ikut di-build, jadi gradient portofolio dipilih dari daftar ini.
export const PORTFOLIO_GRADIENTS = [
  'from-rose-500/80 to-pink-600/80',
  'from-rose-400/80 to-fuchsia-500/80',
  'from-pink-400/80 to-amber-500/80',
  'from-violet-400/80 to-indigo-500/80',
  'from-amber-400/80 to-orange-500/80',
  'from-emerald-400/80 to-teal-600/80',
  'from-violet-400/80 to-indigo-600/80',
  'from-sky-400/80 to-blue-600/80',
  'from-rose-400/80 to-pink-600/80',
  'from-teal-400/80 to-cyan-600/80',
] as const
