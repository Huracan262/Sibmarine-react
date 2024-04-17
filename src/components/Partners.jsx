import Marquee from 'react-fast-marquee'
import PARTNERS_LIST from './Data/PARTNERS_LIST'
import styles from '../styles/partners.module.scss'
import Title from '../UI/Title'

function Partners () {
  return (
    <section className={styles.partners}>
      <div className={styles.wrapper}>
        <Title to="projects">Партнеры</Title>

        <ul className={styles.list}>
          <Marquee speed="30" gradient="gradient" gradientColor="#162639" style={{overflow: 'clip'}} >
            {PARTNERS_LIST.map(item => (
              <li className={styles.item} key={item.title}>
                <img className={styles.img} src={require(`../${item.src}`)} alt={item.title} />
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </section>
  )
}

export default Partners