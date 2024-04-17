import ADVANTAGES_LIST from './Data/ADVANTAGES_LIST'
import Title from '../UI/Title'
import styles from '../styles/advantages.module.scss'

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.wrapper}>
        <Title className="main-advantages__title" to="about/licenses">Преимущества</Title>

        <ul className={styles.list}>
          {ADVANTAGES_LIST.map(item => (
            <li className={styles.item} key={item.id}>
              <div className={styles.iconBlock}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <img className={styles.img} src={require(`../${item.src}`)} alt={item.title} />
            </li>))}
        </ul>
      </div>
    </section>
  )
}

export default Advantages