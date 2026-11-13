import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'

// Format: scrypt:<salt hex>:<hash hex>. Tanpa '$' karena .env di-interpolasi oleh Nuxt saat dev.
export function hashPassword(password: string) {
  const salt = randomBytes(16)
  return `scrypt:${salt.toString('hex')}:${scryptSync(password, salt, 64).toString('hex')}`
}

export function verifyPassword(password: string, stored: string) {
  const [algo, salt, hash] = stored.split(':')
  const expected = Buffer.from(hash ?? '', 'hex')
  // panjang wajib dicek: hash kosong/rusak akan membuat timingSafeEqual(<kosong>, <kosong>) bernilai true
  if (algo !== 'scrypt' || !salt || expected.length !== 64) return false
  return timingSafeEqual(scryptSync(password, Buffer.from(salt, 'hex'), 64), expected)
}
