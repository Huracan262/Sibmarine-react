import styles from '../styles/copyright.module.scss'

function Copyright() {
  return (
    <div className={styles.copyright}>
      <p className={styles.text}>© 2024 Сибмарин-Трейд. Все права защищены. Копирование любого
        материала с сайта допускается только с письменного разрешения администрации сайта.</p>

      <div className={styles.container}>
        <a className={styles.link} href="">Политика конфиденциальности</a>
        <p className={styles.author}>
          Сайт создал:
          <a className={styles.authorLink} href="https://huracan262.github.io/My-Site/">Григорий</a>
        </p>
      </div>
    </div>
  )
}

export default Copyright