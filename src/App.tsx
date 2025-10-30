import { Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { renderRoutes } from './routes'
import GlobalStyle from './styles/GlobalStyle'
import { initGA, logPageView } from './utils/analytics'

/**
 * Composant principal de l'application
 * Gère le routage et les composants globaux
 */
function App() {
  const location = useLocation()

  useEffect(() => {
    // Initialiser Google Analytics avec votre ID de mesure
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (GA_MEASUREMENT_ID) {
      initGA(GA_MEASUREMENT_ID)
    }
  }, [])

  useEffect(() => {
    // Enregistrer chaque changement de page
    logPageView()
  }, [location])

  useEffect(() => {
    if (!import.meta.env.PROD) {
      return
    }

    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
      return
    }

    const storageKey = 'evoubap-visit-notified'
    if (sessionStorage.getItem(storageKey)) {
      return
    }

    const controller = new AbortController()

    fetch('/api/notify-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

  return (
    <>
      <GlobalStyle />
      <Routes>
        {renderRoutes()}
      </Routes>
    </>
  )
}

export default App
