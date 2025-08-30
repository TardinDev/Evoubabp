import { Routes } from 'react-router-dom'
import './App.css'
import { renderRoutes } from './routes'

/**
 * Composant principal de l'application
 * Gère le routage et les composants globaux
 */
function App() {
  return (
    <>
      <Routes>
        {renderRoutes()}
      </Routes>
    </>
  )
}

export default App
