import styles from '../styles/PageNotFound.module.scss'

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ошибка 404<br />
        Страница не найдена :(</h1>
    </div>
  )
}

export default PageNotFound