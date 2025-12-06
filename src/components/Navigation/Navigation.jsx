import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = (props) => {
  const {
    color
  } = props
  return (
    <nav className={`navigation-${color}`}>
      <NavLink to={ '/' }>Главная</NavLink>
      <NavLink to={ '/calculator' }>Калькулятор</NavLink>
      <NavLink to={ '/guarantees' }>Гарантии</NavLink>
      <NavLink to={ '/reviews' }>Отзывы</NavLink>
      <NavLink to={ '/feedback' }>Задать вопрос</NavLink>
    </nav>
  )
}

export default Navigation