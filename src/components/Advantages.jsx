import ADVANTAGES_LIST from './Data/ADVANTAGES_LIST'
import TitleSection from '../UI/Title'
import styles from '../styles/advantages.module.scss'

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.wrapper}>
        <TitleSection className="main-advantages__title">Преимущества</TitleSection>

        <ul className="main-advantages__list">
          {ADVANTAGES_LIST.map(item => (
            <li className="main-advantages__item" key={item}>
              {item}
            </li>))}
        </ul>
      </div>
    </section>
  )
}

export default Advantages