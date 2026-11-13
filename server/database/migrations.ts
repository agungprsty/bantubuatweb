import type Database from 'better-sqlite3'
import { seed } from './seed'

// Dijalankan berurutan sekali per DB (dicatat di PRAGMA user_version).
// Jangan ubah/hapus langkah yang sudah jalan di production: tambahkan langkah baru di akhir.
// Enum (status, kategori) divalidasi di server, bukan CHECK, karena CHECK di SQLite sulit diubah.
export const MIGRATIONS: ((db: Database.Database) => void)[] = [
  (db) => db.exec(`
    CREATE TABLE settings (
      key        TEXT PRIMARY KEY,
      value      TEXT NOT NULL,                       -- JSON
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE plans (
      id          INTEGER PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      price       TEXT NOT NULL,                      -- teks tampilan, mis. 'Rp 2,5jt'
      original    TEXT,
      renewal     TEXT NOT NULL DEFAULT '',
      cta         TEXT NOT NULL DEFAULT '',
      featured    INTEGER NOT NULL DEFAULT 0,
      color       TEXT NOT NULL DEFAULT '',
      icon        TEXT NOT NULL DEFAULT '',
      badge       TEXT,
      perks       TEXT NOT NULL DEFAULT '[]',         -- JSON array
      sort_order  INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE projects (
      id             INTEGER PRIMARY KEY,
      client_name    TEXT NOT NULL DEFAULT '',
      client_contact TEXT NOT NULL DEFAULT '',
      title          TEXT NOT NULL,
      service_slug   TEXT,
      plan_id        INTEGER REFERENCES plans(id) ON DELETE SET NULL,
      status         TEXT NOT NULL DEFAULT 'lead',
      domain         TEXT,
      url            TEXT,
      start_date     TEXT,
      due_date       TEXT,
      done_date      TEXT,
      notes          TEXT NOT NULL DEFAULT '',
      contract_value INTEGER NOT NULL DEFAULT 0 CHECK (contract_value >= 0),  -- Rupiah
      discount       INTEGER NOT NULL DEFAULT 0 CHECK (discount >= 0),
      is_public      INTEGER NOT NULL DEFAULT 0,
      public_tag     TEXT,
      public_desc    TEXT,
      public_result  TEXT,
      public_image   TEXT,
      public_grad    TEXT,
      public_order   INTEGER NOT NULL DEFAULT 0,
      created_at     TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at     TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX projects_status ON projects(status);

    -- tanpa ON DELETE CASCADE: proyek yang masih punya termin tidak bisa terhapus tanpa sengaja
    CREATE TABLE payments (
      id         INTEGER PRIMARY KEY,
      project_id INTEGER NOT NULL REFERENCES projects(id),
      label      TEXT NOT NULL,
      amount     INTEGER NOT NULL CHECK (amount >= 0),
      due_date   TEXT,
      paid_date  TEXT,
      method     TEXT,
      status     TEXT NOT NULL DEFAULT 'belum'
    );
    CREATE INDEX payments_status_due ON payments(status, due_date);

    CREATE TABLE expenses (
      id         INTEGER PRIMARY KEY,
      project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL,  -- NULL = biaya umum
      category   TEXT NOT NULL,
      amount     INTEGER NOT NULL CHECK (amount >= 0),
      date       TEXT NOT NULL,
      note       TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE testimonials (
      id         INTEGER PRIMARY KEY,
      project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL,
      name       TEXT NOT NULL,
      role       TEXT NOT NULL DEFAULT '',
      rating     INTEGER CHECK (rating BETWEEN 1 AND 5),
      quote      TEXT NOT NULL,
      result     TEXT,
      avatar     TEXT,
      initial    TEXT,
      tag        TEXT,
      status     TEXT NOT NULL DEFAULT 'pending',
      featured   INTEGER NOT NULL DEFAULT 0,
      sort_order INTEGER NOT NULL DEFAULT 0,
      source     TEXT NOT NULL DEFAULT 'admin',
      consent    INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE testimonial_tokens (
      token      TEXT PRIMARY KEY,
      project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
      expires_at TEXT NOT NULL,
      used_at    TEXT
    );

    CREATE TABLE faqs (
      id         INTEGER PRIMARY KEY,
      question   TEXT NOT NULL,
      answer     TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE events (
      id           INTEGER PRIMARY KEY,
      type         TEXT NOT NULL,
      path         TEXT NOT NULL,
      referrer     TEXT,
      utm_source   TEXT,
      utm_medium   TEXT,
      utm_campaign TEXT,
      device       TEXT,
      label        TEXT,
      visitor_hash TEXT,
      created_at   TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX events_type_created ON events(type, created_at);
  `),
  seed,
]
