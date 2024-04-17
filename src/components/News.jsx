import { Link } from 'react-router-dom'
import { RiShip2Fill } from 'react-icons/ri'
import Title from '../UI/Title'
import NEWS_LIST from './Data/NEWS_LIST'
import styles from '../styles/News.module.scss'

function News() {
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
  }

  return (
    <article className={styles.news}>
      <div className={styles.wrapper}>
        <Title to="about/news">Новости</Title>

        <article className={styles.new}>
          <div className={styles.container}>
            <h3 className={styles.title}>{NEWS_LIST[0].title}</h3>
            <p className={styles.description}>{NEWS_LIST[0].description}</p>

            <div className={styles.addition}>
              <Link className={styles.link} to="/about">Подробнее</Link>
              <time className={styles.date} dateTime={NEWS_LIST[0].date}>{formatDate(NEWS_LIST[0].date)}</time>
            </div>
          </div>

          <p className={styles.img}>
            <img className={styles.img} src={require(`../${NEWS_LIST[0].imgTitle}`)} alt={NEWS_LIST[0].imgTitle} />
          </p>
        </article>

        <article className={styles.new}>
          <div className={styles.container}>
            <h3 className={styles.title}>{NEWS_LIST[1].title}</h3>
            <p className={styles.description}>{NEWS_LIST[1].description}</p>

            <div className={styles.addition}>
              <Link className={styles.link} to="/about">Подробнее</Link>
              <time className={styles.date} dateTime={NEWS_LIST[1].date}>{formatDate(NEWS_LIST[1].date)}</time>
            </div>
          </div>

          <p className={styles.img}>
            <img className={styles.img} src={require(`../${NEWS_LIST[1].imgTitle}`)} alt={NEWS_LIST[1].imgTitle}/>
          </p>

          <div className={styles.ship}><RiShip2Fill/></div>
        </article>
      </div>
    </article>
  )
}

export default News