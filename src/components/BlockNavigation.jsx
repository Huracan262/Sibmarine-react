import { NavLink, useLocation } from 'react-router-dom'
import styles from '../styles/BlockNavigation.module.scss'

function BlockNavigation({ props }) {
  const location = useLocation().pathname

  return (
    <ul className={styles.list}>
      {props.subTitle.map(item => {
        return (
          <li className={styles.item} key={item.title}>
            <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} to={item.link}>
              {item.title}
            </NavLink>
          </li>
        )})}
    </ul>
  )
}

export default BlockNavigation