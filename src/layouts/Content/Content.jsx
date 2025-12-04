import './Content.scss'

const Content = (props) => {
  const { children } = props

  return <main className='contant'>{children}</main>
}

export default Content