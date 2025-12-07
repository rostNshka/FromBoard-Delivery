import './Addition.scss'

const Addition = (props) => {
  const {
    children,
    color,
  } = props

  return (
    <div className="addition">
      {children && <div className='addition__descriptions'>{children}</div>}
      <div className={`addition__main ${color}`}>
        <div className="addition__main-number">+7 (800) 123 45-67</div>
        <div className="addition__main-discription">Звонки по России бесплатны</div>
      </div>
    </div>
  )
}

export default Addition