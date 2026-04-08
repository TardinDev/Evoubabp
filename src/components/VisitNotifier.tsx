'use client'

import { useEffect } from 'react'

export default function VisitNotifier() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return

    const storageKey = 'evoubap-visit-notified'
    if (sessionStorage.getItem(storageKey)) return

    const controller = new AbortController()

    fetch('/api/notify-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        referer: document.referrer || null,
        userAgent: navigator.userAgent,
      }),
      signal: controller.signal,
    })
      .then(() => {
        sessionStorage.setItem(storageKey, 'true')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Visit notification failed', error)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  return null
}
