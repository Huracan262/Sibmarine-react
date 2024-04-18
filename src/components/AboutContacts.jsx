import styles from '../styles/AboutContacts.module.scss'

function AboutContacts() {
  return (
    <div>
      <address className={styles.list}>
        <a className={styles.link} href="mailto:smtrade@mssc.su">smtrade@mssc.su</a>
        <a className={styles.link} href="tel:+739123447073">+7 (391) 234-70-73</a>
      </address>

      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=92.869438%2C55.978822&mode=search&oid=5984820350&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXVY4ZaPN1dAEeif4GJF%2FUtAEhIJ8IgK1c3Fjz8RDMwKRbqfcz8iBgABAgMEBSgKOABAqs0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFB0i%2BGwgELrbOw%2Bf8F%2FrjkpRaCAhDQodC40LHQnNCw0YDQuNC9igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=92.869438%2C55.978822&sspn=0.009894%2C0.004171&tab=reviews&text=%D0%A1%D0%B8%D0%B1%D0%9C%D0%B0%D1%80%D0%B8%D0%BD&z=17.19" width="1000" height="500" frameBorder="0" allowFullScreen="true" className={styles.el4}></iframe>
    </div>
  )
}

export default AboutContacts