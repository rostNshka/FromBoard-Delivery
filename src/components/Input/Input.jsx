import './Input.scss'
import { Field, ErrorMessage as Error } from 'formik'

const Input = (props) => {
  const {
    id,
    label,
    name,
    placeholder,
  } = props

  return (
    <div className="input__container">
      <label htmlFor={id}>{label}</label>
      <Field
        name={name}
        id={id}
        placeholder={placeholder}
        className="input__container-field"
      />
      <Error name={name}>
        {
          (error) =>
          <span className="input__container-error">{error}</span>
        }
      </Error>
    </div>
  )
}

export default Input