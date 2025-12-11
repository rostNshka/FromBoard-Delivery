import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='not-found container'>
      <h3 className='not-found__title'>Страница не найдена :(</h3>
      <img src="../../../public/not-found.jpg" alt=""/>
      <p className="not-found__info">Ошибка 404</p>
    </div>
  )
}

export default NotFound