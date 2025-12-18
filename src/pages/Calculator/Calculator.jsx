import './Calculator.scss'
import { Formik, Form } from 'formik'
import { initialValues, schemas } from '@/utils/calculatorData'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom'

const Calculator = () => {
  const navigate = useNavigate()

  return (
    <div className="calculator container">
      <h2 className="calculator__title">Калькулятор доставки</h2>
      <p className="calculator__description">Посчитайте, сколько будет стоить перевозка покупки из зарубежа</p>
      <Formik
        initialValues={ initialValues }
        validationSchema={ schemas.custom }
        onSubmit={ () => navigate('/thanks')}
      >
        <Form className="calculator__form">
          <Input
            label="Имя"
            name="firstName"
            id="firstName"
            placeholder="Имя"
          />
          <Input
            label="Почта"
            name="email"
            id="email"
            placeholder="Почта"
          />
          <Input
            label="Номер телефона"
            name="number"
            id="number"
            placeholder="Телефон"
          />
          <Input
            label="Общая площадь м²"
            name="area"
            id="area"
            placeholder="Общая площадь, м²"
          />
          <Input
            label="Вес в кг"
            name="weight"
            id="weight"
            placeholder="Вес, кг"
          />
          <Input
            label="Страна покупки"
            name="countryBuy"
            id="countryBuy"
            placeholder="Страна покупки"
          />
          <Input
            label="Город покупки"
            name="cityBuy"
            id="cityBuy"
            placeholder="Город покупки"
          />
          <Input
            label="Регион доставки"
            name="regionDelivery"
            id="regionDelivery"
            placeholder="Регион доставки"
          />
          <Input
            label="Город доставки"
            name="cityDelivery"
            id="cityDelivery"
            placeholder="Город доставки"
          />
          <Button className="calculator__form-button">Заказать расчет</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default Calculator