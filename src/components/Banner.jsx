import styles from '../styles/banner.module.scss'
import videoBackground from '../video/background (online-video-cutter.com).mp4'

function Banner() {
  return (
    <section className={styles.banner}>
      <video className={styles.background} src={videoBackground} loop autoPlay muted />

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