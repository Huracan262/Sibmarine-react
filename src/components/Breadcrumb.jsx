import { Link, useLocation } from 'react-router-dom'
import { BiSolidHome } from "react-icons/bi";
import BREADCRUMB_NAMES from './Data/BREADCRUMB_NAMES'
import styles from '../styles/Breadcrumb.module.scss'

function Breadcrumb() {
  const location = useLocation()
  const pathNames = location.pathname.split('/').filter(x => x)

  return (
    <ol className={styles.list}>
      <li className={styles.home}>
        <Link className={styles.itemLink} to="/">
          <BiSolidHome className={styles.icon} />
          Главная
        </Link>
      </li>

      {pathNames.map((item, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1

        return <li className={`${styles.item} ${isLast ? styles.active : ''}`} aria-current={isLast ? 'page' : null} key={item}>
          {isLast
            ? <span className={styles.itemLink}>{BREADCRUMB_NAMES[item]}</span>
            : <Link className={styles.itemLink} to={routeTo}>{BREADCRUMB_NAMES[item]}</Link>
          }
        </li>
      })}
    </ol>
  )
}

export default Breadcrumb