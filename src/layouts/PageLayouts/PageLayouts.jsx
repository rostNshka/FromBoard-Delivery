import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

const PageLayouts = (props) => {
  const { children } = props

  return (
    <div className='page-layouts'>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  )
}

export default PageLayouts