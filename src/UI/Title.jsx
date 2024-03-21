import styles from '../styles/titleSection.module.scss'

function TitleSection(props) {
  return (
    <h2 className={styles.title}>{props.children}</h2>
  )
}

export default TitleSection
