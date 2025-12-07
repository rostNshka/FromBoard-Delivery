import './Home.scss'

const Home = () => {
  return (
    <div className='home container'>
      <h2 className="home__title">Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</h2>
      <p className="home__description">Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
      <img src="../../../public/home-image.jpg" alt="" className="home__image"/>
    </div>
  )
}

export default Home