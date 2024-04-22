import { useContext } from 'react'
import styles from '../styles/contacts.module.scss'
import MapContext from '../contexts/MapContext'

function Contacts() {
  const { toggleMap, setToggleMap } = useContext(MapContext)

  return (
    <address className={styles.contacts}>
      <button className={styles.item} onClick={() => setToggleMap(!toggleMap)}>г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16</button>
      <a className={styles.item} href="mailto:smtrade@mssc.su">smtrade@mssc.su</a>
      <a className={styles.item} href="tel:+739123447073">+7 (391) 234-70-73</a>
    </address>
  )
}

export default Contacts