import './Logotype.scss'

const Logotype = (props) => {
  const {
    // color = dark | light
    color
  } = props

  return (
    <div className="logo">
      <img
        src="../../../public/logo.svg"
        alt=""
        loading="lazy"
        width={50}
        height={74}
        className='logo__img'
      />
      <h1 className={`logo__title-${color} h2`}>FromBoard Delivery</h1>
    </div>
  )
}

export default Logotype