import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/calculator'}>Калькулятор</NavLink>
      <NavLink to={'/guarantees'}>Гарантии</NavLink>
      <NavLink to={'/reviews'}>Отзывы</NavLink>
      <NavLink to={'/feedback'}>Задать вопрос</NavLink>
    </header>
  )
}

export default Header