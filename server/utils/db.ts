import Database from 'better-sqlite3'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { MIGRATIONS } from '../database/migrations'

let db: Database.Database | undefined

export function useDb() {
  if (db) return db
  // production wajib set path, supaya DB tidak diam-diam dibuat di folder app (di luar backup)
  const path = useRuntimeConfig().dbPath || (import.meta.dev ? '.data/dev.db' : '')
  if (!path) throw new Error('NUXT_DB_PATH belum di-set')
  mkdirSync(dirname(path), { recursive: true })
  db = new Database(path)
  db.pragma('journal_mode = WAL')
  db.pragma('busy_timeout = 5000')
  db.pragma('foreign_keys = ON')

  const version = db.pragma('user_version', { simple: true }) as number
  if (version < MIGRATIONS.length) {
    db.transaction(() => {
      for (const step of MIGRATIONS.slice(version)) step(db!)
      db!.pragma(`user_version = ${MIGRATIONS.length}`)
    })()
  }
  return db
}
