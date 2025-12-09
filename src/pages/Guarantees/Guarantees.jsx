import './Guarantees.scss'
import { guaranteesData } from '@/utils/guaranteesData'
import GuaranteesCard from '@/components/GuaranteesCard'

const Guarantees = () => {
  return (
    <div className="guarantees container">
      {guaranteesData.map((guarantee, index) => (
        <GuaranteesCard imgSrc={guarantee.imgSrc} key={index} title={guarantee.title} />
      ))}
    </div>
  )
}

export default Guarantees