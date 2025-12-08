import './Card.scss'

const Card = (props) => {
  const {
    imgSrc,
    title,
    description,
    key,
  } = props

  return (
    <div className="card" key={key}>
      <img src={imgSrc} alt="" className="card__img" width={136} height={136} />
      <div className="card__info">
        <h3 className='card__info-title'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card