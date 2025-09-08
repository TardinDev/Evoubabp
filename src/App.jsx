import { Routes } from 'react-router-dom'
import './App.css'
import { renderRoutes } from './routes'
import GlobalStyle from './styles/GlobalStyle'

/**
 * Composant principal de l'application
 * Gère le routage et les composants globaux
 */
function App() {
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
