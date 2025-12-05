import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { Outlet } from 'react-router-dom'

const PageLayouts = () => {
  return (
    <div className='page-layouts'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayouts