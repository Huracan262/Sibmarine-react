function Button({nameClass, text}) {
  return (
    <button className={`button ${!!nameClass && ''}`} type="button">{text}</button>
  )
}

export default Button