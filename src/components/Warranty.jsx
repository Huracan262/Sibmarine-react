import { GiAnchor } from "react-icons/gi";
import styles from '../styles/warranty.module.scss'
import Title from '../UI/Title'
import WARRANTY_LIST from './Data/WARRANTY_LIST'

function Warranty() {
  return (
    <section className={styles.warranty}>
      <div className={styles.wrapper}>
        <Title to="about/licenses">Гарантии</Title>

        <ul className={styles.list}>
          {WARRANTY_LIST.map(item => (
            <li className={styles.item} key={item.title}>
              <div className={styles.iconContainer}>
                <GiAnchor className={styles.icon} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Warranty