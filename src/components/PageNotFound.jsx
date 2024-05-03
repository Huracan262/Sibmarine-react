import styles from '../styles/PageNotFound.module.scss'
import img from '../img/404.svg'
import Button from '../UI/Button'

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.dev}>
          <h1 className={styles.title}>Ошибка 404</h1>
          <small className={styles.description}>Такая страница не найдена — пожалуйста, вернитесь на главную страницу или выберите нужный раздел в верхнем меню</small>
          <Button>На главную</Button>
        </div>

        <p className={styles.img}>
          <img src={img} alt="404" />
        </p>
      </div>
    </div>
  )
}

export default PageNotFound