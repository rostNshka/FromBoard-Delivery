import Logotype from '@/components/Logotype'
import './Header.scss'
import Navigation from '@/components/Navigation'

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <Logotype color='dark' />
        <Navigation color='dark' />
      </div>
    </header>
  )
}

export default Header