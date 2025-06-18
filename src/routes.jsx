import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FormationPage from './components/Formations/Formations'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/formations',
    element: <FormationPage />,
  },
]

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))
} 