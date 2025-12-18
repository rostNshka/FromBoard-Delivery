import './Thanks.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Thanks = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="thanks container">
      <p>Спасибо за обращение! <br/> Перенаправляем на главную странницу!</p>
    </div>
  )
}

export default Thanks