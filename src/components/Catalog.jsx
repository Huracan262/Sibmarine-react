import {NavLink} from 'react-router-dom'
import CATALOG_LIST from './Data/CATALOG_LIST'
import TitleSection from '../UI/Title'
import styles from '../styles/catalog.module.scss'

function Catalog() {
  return (
    <section className={styles.catalog}>
      <div className={styles.wrapper}>
        <TitleSection>Каталог</TitleSection>

        <ul className={styles.list}>
          {CATALOG_LIST.map(item => (
            <li className={styles.item} key={item.title}>
              <figure className={styles.figure}>
                <figcaption className={styles.figureDescription}>
                  <NavLink className={styles.cardName}><h3>{item.title}</h3></NavLink>
                  <NavLink className={styles.link}>Подробнее</NavLink>
                </figcaption>

                <img className={styles.img} src={require(`../${item.src}`)} width="440" height="400" alt={item.title} />
              </figure>
            </li>
          ))}
        </ul>

        <NavLink className={styles.linkCatalog}>Все категории</NavLink>
      </div>
    </section>
  )
}

export default Catalog
