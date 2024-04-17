import { Link } from 'react-router-dom'
import dateFormatting from '../utils/dateFormatting'
import NEWS_LIST from './Data/NEWS_LIST'
import styles from '../styles/AboutNews.module.scss'

function AboutNews() {
  return (
    <>
      {NEWS_LIST.map(item => {
        return (
          <article className={styles.new}>
            <div className={styles.container}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <div className={styles.addition}>
                <Link className={styles.link} to="">Подробнее</Link>
                <time className={styles.date} dateTime={item.date}>{dateFormatting(item.date)}</time>
              </div>
            </div>

            <p className={styles.img}>
              <img className={styles.img} src={require(`../${item.imgTitle}`)} alt={item.imgTitle}/>
            </p>
          </article>
        )
      })}
    </>
  )
}

export default AboutNews