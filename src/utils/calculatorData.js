import * as Yup from 'yup'

const regx ={
  name: /^[а-яА-Яa-zA-z]{2,20}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  number: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  area: /^\d+$/,
  weight: /^\d+$/,
  countryBuy: /^[а-яА-я]{3,30}$/,
  cityBuy: /^[а-яА-я]{3,30}$/,
  regionDelivery: /^[а-яА-я]{3,30}$/,
  cityDelivery: /^[а-яА-я]{3,30}$/,

}

const firstName = Yup.string()
  .matches(regx.name, 'Кириллица латиница от 2 до 20 символов')
  .required('Введите имя')

const email = Yup.string()
  .matches(regx.email, 'Формат: example@example.com')
  .required('Введите почту')

const number = Yup.string()
  .matches(regx.number, 'Формат: 8(123)4567890')
  .required('Введите номер телефона')

const area = Yup.string()
  .matches(regx.area, 'Формат: число')
  .required('Введите площадь м²')

const weight = Yup.string()
  .matches(regx.weight, 'Формат: число')
  .required('Введите вес в кг')

const countryBuy = Yup.string()
  .matches(regx.countryBuy, 'Формат: Страна')
  .required('Введите страну покупки')

const cityBuy = Yup.string()
  .matches(regx.cityBuy, 'Формат: Город')
  .required('Введите город покупки')

const regionDelivery = Yup.string()
  .matches(regx.regionDelivery, 'Формат: Регион')
  .required('Введите регион доставки')

const cityDelivery = Yup.string()
  .matches(regx.cityDelivery, 'Формат: Город')
  .required('Введите город доставки')


export const schemas = {
  custom: Yup.object().shape({
    firstName,
    email,
    number,
    area,
    weight,
    countryBuy,
    cityBuy,
    regionDelivery,
    cityDelivery,
  })
}

export const initialValues = {
  firstName: '',
  email: '',
  number: '',
  area: '',
  weight: '',
  countryBuy: '',
  cityBuy: '',
  regionDelivery: '',
  cityDelivery: '',
}