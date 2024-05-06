import { FaDownload } from 'react-icons/fa'
import styles from '../styles/AboutContacts.module.scss'
import Breadcrumb from './Breadcrumb'
import SOCIALS_LIST from './Data/SOCIALS_LIST'
import {useEffect} from 'react'

function AboutContacts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={styles.contacts}>
      <div className={styles.wrapper}>
        <Breadcrumb />

        <h1 className={styles.h1}>Контакты</h1>

        <div className={styles.container}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>Адрес</th>
              <td className={styles.td}>
                г. Красноярск, ул. 60 лет Октября д. 90, оф. 2-16
              </td>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>Телефон</th>
              <td className={styles.td}>
                <a className={styles.link} href="tel:+739123447073">+7 (391) 234-70-73</a>
              </td>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>E-mail</th>
              <td className={styles.td}>
                <a className={styles.link} href="mailto:smtrade@mssc.su">smtrade@mssc.su</a>
              </td>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>Часы работы</th>
              <td className={styles.td}>
                Пн-Сб: c 9:00 до 18:00
              </td>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>Мессенджеры</th>
              <td className={styles.td}>
                <ul className={styles.socialsList}>
                  {SOCIALS_LIST.map(item => (
                    <li className={styles.socialsItem} key={item.name}>
                      <a className={styles.socialsLink} href={item.url}>
                        {item.logo}
                        <span className="visually-hidden">{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>

          <div className={styles.buttonDownload}> {/* Временно (div) */}
            <div className={styles.download}>
              <FaDownload className={styles.icon} />

              Скачать реквизиты
            </div>
          </div>
        </div>

        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=92.869438%2C55.978822&mode=search&oid=5984820350&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXVY4ZaPN1dAEeif4GJF%2FUtAEhIJ8IgK1c3Fjz8RDMwKRbqfcz8iBgABAgMEBSgKOABAqs0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFB0i%2BGwgELrbOw%2Bf8F%2FrjkpRaCAhDQodC40LHQnNCw0YDQuNC9igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=92.869438%2C55.978822&sspn=0.009894%2C0.004171&tab=reviews&text=%D0%A1%D0%B8%D0%B1%D0%9C%D0%B0%D1%80%D0%B8%D0%BD&z=17.19" width="1000" height="500" frameBorder="0" allowFullScreen="true" className={styles.map}></iframe>
      </div>
    </main>
  )
}

export default AboutContacts