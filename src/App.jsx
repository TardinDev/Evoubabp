import { Routes } from 'react-router-dom'
import './App.css'
import LanguageModal from './components/i18n/LanguageModal'
import { renderRoutes } from './routes'

/**
 * Composant principal de l'application
 * Gère le routage et les composants globaux
 */
function App() {
  return (
    <>
      {/* Modal de sélection de langue */}
      <LanguageModal />
      
      {/* Routes de l'application */}
      <Routes>
        {renderRoutes()}
      </Routes>
    </>
  )
}

export default App
