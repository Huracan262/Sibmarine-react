import LogoFooter from '../UI/LogoFooter'
import SOCIALS_LIST from './Data/SOCIALS_LIST'
import Copyright from './Copyright'
import styles from '../styles/pageFooter.module.scss'
import ContactsFooter from './ContactsFooter'

function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.contacts}>
            <LogoFooter size="170" />

            <ContactsFooter />

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
          </div>

          <div className={styles.footerLists}>
            <div className={styles.footerListContainer}>
              <h3 className={styles.footerListTitle}>Оборудование</h3>

              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Радио-навигационное</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Электрическое</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Механизмы</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerListContainer}>
              <h3 className={styles.footerListTitle}>Услуги</h3>

              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">По радио-навигационному оборудованию</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">По электрическому оборудованию</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">По корпусным работам</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerListContainer}>
              <h3 className={styles.footerListTitle}>О компании</h3>

              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">О нас</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Сертификаты и лицензии</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Наши работы</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Новости</a>
                </li>
                <li className={styles.footerListItem}>
                  <a className="footer-navigation__item-link">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Copyright />
      </div>
    </footer>
  )
}

export default PageFooter