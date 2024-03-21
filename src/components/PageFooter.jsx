import Logo from '../UI/Logo'
import Contacts from './Contacts'
import SOCIALS_LIST from './Data/SOCIALS_LIST'
import Copyright from './Copyright'

function PageFooter() {
  return (
    <footer className="page__footer page-footer">
      <div className="wrapper">
        <div className="page-footer__wrapper-row">
          <div className="page-footer__wrapper">
            <Logo size="100" />
            <Contacts />

            <ul className="page-footer__socials footer-socials">
              {SOCIALS_LIST.map(item => (
                <li className="footer-socials__item" key={item.name}>
                  {/*Цввет - временный костыль!*/}
                  <a href={item.url} style={{color: 'white'}}>
                    {item.logo}
                    <span className="visually-hidden">{item.name}</span>
                  </a>
                </li>
                ))}
            </ul>
          </div>

          <div className="page-footer__wrapper-navigation">
            <div className="page-footer__navigation footer-navigation">
              <h3 className="footer-navigation__title">Оборудование</h3>

              <ul className="footer-navigation__list">
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Радио-навигационное</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Электрическое</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Механизмы</a>
                </li>
              </ul>
            </div>

            <div className="page-footer__navigation footer-navigation">
              <h3 className="footer-navigation__title">Услуги</h3>

              <ul className="footer-navigation__list">
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Услуги по радио-навигационному оборудованию</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Услуги по электрическому оборудованию</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Услуги по корпусным работам</a>
                </li>
              </ul>
            </div>

            <div className="page-footer__navigation footer-navigation">
              <h3 className="footer-navigation__title">О компании</h3>

              <ul className="footer-navigation__list">
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">О нас</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Сертификаты и лицензии</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Наши работы</a>
                </li>
                <li className="footer-navigation__item">
                  <a className="footer-navigation__item-link">Новости</a>
                </li>
                <li className="footer-navigation__item">
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