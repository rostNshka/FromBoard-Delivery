import './Category.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Category = () => {
  const { categoryId } = useParams()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const currentCategoryArray = data.filter(data => data.category === categoryId)

  console.log(currentCategoryArray)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()

        if (data.error) {
          setError(data.error.message)
          setData(null)
          return
        }
        setData(data)
        setError(null)
      } catch {
        setError('Failed to fetch data')
        setData([])
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])
  return (
    <div className="category container">
      {currentCategoryArray.map((category, index) => (
        <div className='categor__item' key={index}>
          <h5>{category.title}</h5>
          <div className="category__item-info">
            <img src={category.image} alt="category.title"/>
            <div className="category__item-info__description">
              <div className='category__item-info__description-text'>{category.description}</div>
              <div className="category__item-info__description-price">{category.price}$</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category