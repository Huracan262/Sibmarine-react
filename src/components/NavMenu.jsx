import styles from '../styles/NavMenu.module.scss'

function NavMenu({ item }) {
  return (
    <aside className={styles.menu}>
      <ul className={styles.list}>
        {item.map(item => (
          <li className={styles.item}>

          </li>
        ))}
      </ul>
    </aside>
  )
}

export default NavMenu