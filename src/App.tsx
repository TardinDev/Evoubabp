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
