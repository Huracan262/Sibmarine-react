import styles from '../styles/banner.module.scss'

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Полный цикл<br/>
          <span className={styles.titleDescription}>обслуживания водного транспорта<br />
          от проектирования до реализации</span>
        </h1>
      </div>
    </section>
  )
}

export default Banner