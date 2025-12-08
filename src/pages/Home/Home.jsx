import './Home.scss'
import { cardData } from '@/utils/cardData'
import Card from '@/components/Card'

const Home = () => {
  return (
    <div className='home container'>
      <div className="home__info">
        <h2 className="home__title">Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</h2>
        <p className="home__description">Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
        <img src="../../../public/home-image.jpg" alt="" className="home__image"/>
      </div>
      <div className="home__cards">
        {cardData.map((item, index) => (
          <Card imgSrc={item.imgSrc} title={item.title} description={item.description} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Home