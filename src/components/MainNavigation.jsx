import NAVIGATION_LIST from './Data/NAVIGATION_LIST'
import styles from '../styles/mainNavigation.module.scss'

function MainNavigation({className}) {
  return (
    <nav className={className}>
      <ul className={styles.list}>
        {NAVIGATION_LIST.map(item => (
          <li className={styles.item} key={item.label}>
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation