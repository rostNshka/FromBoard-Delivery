import './OurOffers.scss'
import { Link } from 'react-router-dom'

const OurOffers = () => {
  const categories = [
    {
      title: `men's clothing`,
      name: `men's clothing`,
      img: 'src/assets/images/categories/icons8-t-shirt-80.png',
    },
    {
      title: `jewelery`,
      name: `jewelery`,
      img: 'src/assets/images/categories/icons8-jewelery-80.png',
    },{
      title: `electronics`,
      name: `electronics`,
      img: 'src/assets/images/categories/icons8-electronic-80.png',
    },{
      title: `women's clothing`,
      name: `women's clothing`,
      img: 'src/assets/images/categories/icons8-dress-80.png',
    },
  ]

  return (
    <div className='our-offers container'>
      <h1 className='our-offers__title'>Категории</h1>
      <ul className='our-offers__list'>
        {categories.map((category, index) => (
          <li key={ index } className='our-offers__list-item'>
            <Link to={ `/category/${category.name}` } className='our-offers__list-item-box'>
              <h4 className='our-offers__list-item__title'>{ category.title }</h4>
              <img src={category.img} width={80} height={80} alt=''/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OurOffers