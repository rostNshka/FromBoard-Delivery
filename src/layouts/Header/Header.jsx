import Logotype from '@/components/Logotype'
import './Header.scss'
import Navigation from '@/components/Navigation'
import Addition from '@/components/Addition'
import Button from '@/components/Button'

const Header = () => {
  return (
    <header className="header container">
      <div className="header__main">
        <Logotype color='dark' />
        <Navigation color='dark' />
      </div>
      <div className='header__info'>
        <Addition>Доставляем товары из заграницы в Россию</Addition>
        <Button>Оставить заявку</Button>
      </div>
    </header>
  )
}

export default Header