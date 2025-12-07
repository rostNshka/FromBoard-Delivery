import './Button.scss'

const Button = (props) => {
  const { children } = props

  return (
    <button type='button' className="button">{children}</button>
  )
}

export default Button