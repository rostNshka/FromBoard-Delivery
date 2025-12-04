import '@/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from '@/pages/Calculator'
import Guarantees from '@/pages/Guarantees'
import Reviews from '@/pages/Reviews'
import Feedback from '@/pages/Feedback'
import NotFound from '@/pages/NotFound'
import PageLayouts from '@/layouts/PageLayouts'

const router = createBrowserRouter([
  { path: '/', element: (
    <PageLayouts>
      <Home />
    </PageLayouts>
    )},
  { path: 'calculator', element: (
      <PageLayouts>
        <Calculator />
      </PageLayouts>
    )},
  { path: 'guarantees', element: (
      <>
        <PageLayouts>
          <Guarantees />
        </PageLayouts>
      </>
    )},
  { path: 'reviews', element: (
      <>
        <PageLayouts>
          <Reviews />
        </PageLayouts>
      </>
    )},
  { path: 'feedback', element: (
      <>
        <PageLayouts>
          <Feedback />
        </PageLayouts>
      </>
    )},
  { path: '*', element: (
      <>
        <PageLayouts>
          <NotFound />
        </PageLayouts>
      </>
    )},

])

const App = () => {
  return <RouterProvider router={router} />
}

export default App