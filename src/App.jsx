import '@/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Calculator from '@/pages/Calculator/Calculator'
import Guarantees from '@/pages/Guarantees/Guarantees'
import Reviews from '@/pages/Reviews/Reviews'
import OurOffers from '@/pages/OurOffers'
import NotFound from '@/pages/NotFound'
import PageLayouts from '@/layouts/PageLayouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayouts />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'guarantees', element: <Guarantees /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'our-offers', element: <OurOffers /> },
      { path: '*', element: <NotFound /> },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App