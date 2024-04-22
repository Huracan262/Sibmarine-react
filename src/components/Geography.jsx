import Title from '../UI/Title'
import styles from '../styles/geography.module.scss'
import GEOGRAPHY_LIST from './Data/GEOGRAPHY_LIST'

function Geography() {
  return (
    <section className={styles.geography}>
      <div className={styles.wrapper}>
        <Title to="about/projects">География работ</Title>

        <p className={styles.description}>CибМарин - один из лидеров в производстве и поставке
          радиоэлектронных средств навигации,
          связи и автоматизированного управления для флота с 2011 года.
          География наших работ включает в себя крупнейшие порты страны</p>

        <div className={styles.map}>
          <img className={styles.img} src={require('../img/map.png')} alt="Карта работ по россии" />

          <ul className={styles.points}>
            {GEOGRAPHY_LIST.map(item => {
              return (
                <li className={styles.container} style={{top: `${item.yСoordinate}px`, left:`${item.хСoordinate}px`}}>
                  <div className={styles.point}></div>
                  <div className={styles.pointDescription}>{item.description}</div>
                  <span className={styles.city}>{item.city}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Geography