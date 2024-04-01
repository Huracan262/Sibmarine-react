import styles from '../styles/contacts.module.scss'

function Contacts() {
  return (
    <address className={styles.contacts}>
      <button className={styles.item} onClick="">г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16</button>
      <a className={styles.item} href="mailto:smtrade@mssc.su">smtrade@mssc.su</a>
      <a className={styles.item} href="tel:+739123447073">+7 (391) 234-70-73</a>
    </address>
  )
}

export default Contacts