export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  // Panel admin tidak dilacak; token testimoni di URL disamarkan
  const isAdmin = () => window.location.pathname.startsWith('/admin')
  const pageLocation = () => window.location.href.replace(/\/testimoni\/[^/?#]+/, '/testimoni/_')

  // Helper to send GA4 custom events safely
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (isAdmin()) return
    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', eventName, params)
    }
  }

  // Analitik first-party (/api/track). Admin & form testimoni tidak dihitung.
  let landing = true
  const track = (type: 'pageview' | 'wa_click', extra: Record<string, unknown> = {}) => {
    if (/^\/(admin|testimoni)(\/|$)/.test(window.location.pathname)) return
    navigator.sendBeacon?.('/api/track', JSON.stringify({ type, path: window.location.pathname, ...extra }))
  }

  // Global event delegation for WhatsApp clicks
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('a')
    if (!target) return

    const href = target.getAttribute('href') || ''
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      const text = target.innerText?.trim() || target.getAttribute('aria-label') || 'WhatsApp CTA'
      trackEvent('click_cta_whatsapp', {
        event_category: 'engagement',
        event_label: text,
        link_url: href,
        page_location: pageLocation(),
        page_title: document.title,
      })
      track('wa_click', { label: text })
    }
  })

  // Track pageviews on Nuxt route changes
  nuxtApp.hook('page:finish', () => {
    trackEvent('page_view', {
      page_location: pageLocation(),
      page_title: document.title,
      page_path: new URL(pageLocation()).pathname,
    })
    // referrer & UTM hanya dari halaman pertama; navigasi berikutnya adalah perpindahan di dalam situs
    const utm = new URLSearchParams(window.location.search)
    track('pageview', landing
      ? { landing: true, referrer: document.referrer, utm_source: utm.get('utm_source'), utm_medium: utm.get('utm_medium'), utm_campaign: utm.get('utm_campaign') }
      : {})
    landing = false
  })

  return {
    provide: {
      trackEvent,
    },
  }
})
