import styles from '../styles/banner.module.scss'
import videoBackground from '../video/Test2.mp4'

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.video}>
        <video className={styles.background} src={videoBackground} loop autoPlay muted />
      </div>

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