import './Category.scss'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Category = () => {
  const { categoryId } = useParams()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : Infinity

  const currentCategoryArray = data.filter(
    data => (data.category === categoryId && data.price <= maxPrice)
  )

  const filterPrice = (e) => {
    const value = e.target.value
    setSearchParams(value ? { maxPrice: value } : {})
  }

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
      <div className="filter__max-pice">
        <label htmlFor="maxPrice">Max price</label>
        <input
          type="number"
          id="maxPrice"
          onChange={filterPrice}
          value={searchParams.get("maxPrice") || ""}
        />
      </div>
      {error && <p>{error.message}</p>}
      {loading && <p className="loading">Загрузка...</p>}
      {currentCategoryArray.map((category, index) => (
        <div className='category__item' key={index}>
          <h5 categor__item-title>{category.title}</h5>
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