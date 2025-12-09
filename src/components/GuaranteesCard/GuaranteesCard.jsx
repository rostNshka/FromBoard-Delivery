import './GuaranteesCard.scss'

const GuaranteesCard = (props) => {
  const {
    imgSrc,
    title,
    key,
  } = props

  return (
    <div className="guarantees-card" key={key}>
      <img src={imgSrc} alt="" height={375}/>
      <h4 className="guarantees-card__tilte h3">{title}</h4>
    </div>
  )
}

export default GuaranteesCard