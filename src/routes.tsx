import { Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FormationPage from './Pages/FormationPage'
import MobileFormationPage from './Pages/MobileFormationPage'
import MachineLearningPage from './Pages/MachineLearningPage'
import WebDevPage from './Pages/WebDevPage'
import PaymentPage from './Pages/PaymentPage'
import MentionsLegalesPage from './Pages/MentionsLegalesPage'
import PolitiqueConfidentialitePage from './Pages/PolitiqueConfidentialitePage'
import CGUPage from './Pages/CGUPage'

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
    path: '/formations/web-dev',
    element: <WebDevPage />,
  },
  {
    path: '/formations/mobile',
    element: <MobileFormationPage />,
  },
  {
    path: '/formations/machine-learning',
    element: <MachineLearningPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegalesPage />,
  },
  {
    path: '/politique-confidentialite',
    element: <PolitiqueConfidentialitePage />,
  },
  {
    path: '/cgu',
    element: <CGUPage />,
  },
]

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))
} 