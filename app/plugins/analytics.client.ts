export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  // Helper to send GA4 custom events safely
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', eventName, params)
    }
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
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  })

  // Track pageviews on Nuxt route changes
  nuxtApp.hook('page:finish', () => {
    trackEvent('page_view', {
      page_location: window.location.href,
      page_title: document.title,
      page_path: window.location.pathname,
    })
  })

  return {
    provide: {
      trackEvent,
    },
  }
})
