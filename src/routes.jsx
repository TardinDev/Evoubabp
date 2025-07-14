import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FormationPage from './Pages/FormationPage'
import MobileFormationPage from './Pages/MobileFormationPage'
import PaymentPage from './Pages/PaymentPage'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/formations',
    element: <FormationPage />,
  },
  {
    path: '/formations/mobile',
    element: <MobileFormationPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
]

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))
} 