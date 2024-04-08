import {Link, NavLink} from 'react-router-dom'
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
              <Link className={styles.link} to={''}>
                <figure className={styles.figure}>
                  <figcaption className={styles.figureDescription}>
                    <h3 className={styles.cardName}>{item.title}</h3>
                  </figcaption>

                  <img className={styles.img} src={require(`../${item.src}`)} width="440" height="400" alt={item.title} />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Catalog
