import styles from '../styles/button.module.scss'

function Button(props) {
  return (
    <button className={styles.button} onClick={() => props.onClick(true)}>
      {props.children}
    </button>
  )
}

export default Button