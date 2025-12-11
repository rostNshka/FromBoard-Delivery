import { useEffect, useState } from 'react'

const OurOffers = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()

        console.log(data)

        if (data.error) {
          setError(data.error.message)
          return
        }
        setError(null)
      } catch {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    getData().then(r => r)
  }, [])

  return (
    <div>Feedback page</div>
  )
}

export default OurOffers