import Title from '../UI/Title'
import styles from '../styles/geography.module.scss'

function Geography() {
  return (
    <section className={styles.geography}>
      <div className={styles.wrapper}>
        <Title>География работ</Title>

        <p className={styles.description}>CибМарин - один из лидеров в производстве и поставке
          радиоэлектронных средств навигации,
          связи и автоматизированного управления для флота с 2011 года.
          География наших работ включает в себя крупнейшие порты страны</p>

        <div className={styles.map}>
          <img className={styles.img} src={require('../img/map.png')} alt="Карта работ по россии" />

          <div className={styles.points}></div>
        </div>
      </div>
    </section>
  )
}

export default Geography