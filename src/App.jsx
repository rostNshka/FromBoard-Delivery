import '@/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Calculator from '@/pages/Calculator/Calculator'
import Guarantees from '@/pages/Guarantees/Guarantees'
import Reviews from '@/pages/Reviews'
import Feedback from '@/pages/Feedback'
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
      { path: 'feedback', element: <Feedback /> },
      { path: '*', element: <NotFound /> },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App