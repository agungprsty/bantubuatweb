// ?from=YYYY-MM-DD&to=YYYY-MM-DD (tanggal WIB, inklusif)
export default defineEventHandler((event) => {
  const q = getQuery(event)
  const from = date(q.from, 'Tanggal awal', true)!
  const to = date(q.to, 'Tanggal akhir', true)!
  const days = (Date.parse(to) - Date.parse(from)) / 86_400_000 + 1
  if (days < 1 || days > 366) throw createError({ statusCode: 400, statusMessage: 'Rentang tanggal harus 1 sampai 366 hari' })

  const db = useDb()
  const range = { from, to }
  // created_at disimpan UTC; batas hari WIB dihitung ke UTC agar index (type, created_at) tetap terpakai
  const inRange = `created_at >= datetime(@from, '-7 hours') AND created_at < datetime(@to, '+1 day', '-7 hours')`
  const all = <T>(sql: string) => db.prepare(sql).all(range) as T[]

  const totals = db.prepare(`
    SELECT COALESCE(SUM(type = 'pageview'), 0) AS pageviews,
      COUNT(DISTINCT CASE WHEN type = 'pageview' THEN visitor_hash END) AS visitors,
      COALESCE(SUM(type = 'wa_click'), 0) AS waClicks,
      COUNT(DISTINCT CASE WHEN type = 'wa_click' THEN visitor_hash END) AS waVisitors
    FROM events WHERE ${inRange}`).get(range) as { pageviews: number, visitors: number, waClicks: number, waVisitors: number }

  const daily = all<{ date: string, visitors: number, waClicks: number }>(`
    WITH RECURSIVE d(day) AS (SELECT @from UNION ALL SELECT date(day, '+1 day') FROM d WHERE day < @to)
    SELECT day AS date,
      (SELECT COUNT(DISTINCT visitor_hash) FROM events WHERE type = 'pageview'
        AND created_at >= datetime(day, '-7 hours') AND created_at < datetime(day, '+1 day', '-7 hours')) AS visitors,
      (SELECT COUNT(*) FROM events WHERE type = 'wa_click'
        AND created_at >= datetime(day, '-7 hours') AND created_at < datetime(day, '+1 day', '-7 hours')) AS waClicks
    FROM d`)

  return {
    totals: {
      ...totals,
      // persentase pengunjung yang klik WA (bukan jumlah klik, agar klik berulang tidak menggelembungkan)
      conversion: totals.visitors ? Math.round((totals.waVisitors / totals.visitors) * 1000) / 10 : 0,
    },
    daily,
    pages: all<{ path: string, pageviews: number, visitors: number }>(`
      SELECT path, COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors
      FROM events WHERE type = 'pageview' AND ${inRange}
      GROUP BY path ORDER BY pageviews DESC LIMIT 10`),
    sources: all<{ source: string, visits: number }>(`
      SELECT COALESCE(utm_source, referrer, 'Langsung') AS source, COUNT(*) AS visits
      FROM events WHERE type = 'pageview' AND landing = 1 AND ${inRange}
      GROUP BY 1 ORDER BY visits DESC LIMIT 10`),
    campaigns: all<{ source: string | null, medium: string | null, campaign: string, visits: number }>(`
      SELECT utm_source AS source, utm_medium AS medium, utm_campaign AS campaign, COUNT(*) AS visits
      FROM events WHERE type = 'pageview' AND landing = 1 AND utm_campaign IS NOT NULL AND ${inRange}
      GROUP BY 1, 2, 3 ORDER BY visits DESC LIMIT 10`),
    devices: all<{ device: string, visitors: number }>(`
      SELECT device, COUNT(DISTINCT visitor_hash) AS visitors
      FROM events WHERE type = 'pageview' AND ${inRange}
      GROUP BY device ORDER BY visitors DESC`),
    waPages: all<{ path: string, clicks: number }>(`
      SELECT path, COUNT(*) AS clicks FROM events WHERE type = 'wa_click' AND ${inRange}
      GROUP BY path ORDER BY clicks DESC LIMIT 10`),
    waLabels: all<{ label: string | null, clicks: number }>(`
      SELECT label, COUNT(*) AS clicks FROM events WHERE type = 'wa_click' AND ${inRange}
      GROUP BY label ORDER BY clicks DESC LIMIT 10`),
  }
})
