import './Button.scss'

const Button = (props) => {
  const { children } = props

  return (
    <button type='submit' className="button">{children}</button>
  )
}

export default Button