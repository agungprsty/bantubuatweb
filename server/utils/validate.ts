import type { H3Event } from 'h3'

const invalid = (message: string) => createError({ statusCode: 400, statusMessage: message })
const empty = (v: unknown) => v === undefined || v === null || (typeof v === 'string' && v.trim() === '')

export function text(v: unknown, field: string, { max = 500, required = false } = {}) {
  if (empty(v)) {
    if (required) throw invalid(`${field} wajib diisi`)
    return null
  }
  if (typeof v !== 'string') throw invalid(`${field} tidak valid`)
  const s = v.trim()
  if (s.length > max) throw invalid(`${field} maksimal ${max} karakter`)
  return s
}

// Rupiah & urutan: bilangan bulat >= 0
export function int(v: unknown, field: string) {
  const n = empty(v) ? 0 : Number(v)
  if (!Number.isSafeInteger(n) || n < 0) throw invalid(`${field} harus angka bulat 0 atau lebih`)
  return n
}

export function date(v: unknown, field: string, required = false) {
  if (empty(v)) {
    if (required) throw invalid(`${field} wajib diisi`)
    return null
  }
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v) || Number.isNaN(Date.parse(v))) {
    throw invalid(`${field} harus tanggal YYYY-MM-DD`)
  }
  return v
}

export function oneOf<T extends string>(v: unknown, options: readonly T[], field: string) {
  if (!options.includes(v as T)) throw invalid(`${field} tidak valid`)
  return v as T
}

// Link yang tampil di website publik: hanya http(s), cegah href javascript:
export function httpUrl(v: unknown, field: string) {
  const s = text(v, field, { max: 300 })
  if (s && !/^https?:\/\/[^\s]+$/i.test(s)) throw invalid(`${field} harus diawali http:// atau https://`)
  return s
}

// Gambar: path lokal (/images/...) atau URL http(s)
export function imagePath(v: unknown, field: string) {
  const s = text(v, field, { max: 300 })
  if (s && !/^(\/(?!\/)|https?:\/\/)[^\s]+$/i.test(s)) throw invalid(`${field} harus diawali / atau https://`)
  return s
}

export function idParam(event: H3Event) {
  const id = Number(getRouterParam(event, 'id'))
  if (!Number.isSafeInteger(id) || id <= 0) throw createError({ statusCode: 404, statusMessage: 'Data tidak ditemukan' })
  return id
}

// better-sqlite3: run().changes === 0 berarti id tidak ada
export function assertFound(changes: number) {
  if (changes === 0) throw createError({ statusCode: 404, statusMessage: 'Data tidak ditemukan' })
}
