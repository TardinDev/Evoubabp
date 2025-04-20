
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import FormationPage from './components/Formations/Formations'



function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formations" element={<FormationPage />} />
    </Routes>
  )
}

export default App
