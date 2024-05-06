import { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import Breadcrumb from '../components/Breadcrumb'
import Title from '../UI/Title'
import styles from '../styles/PageAbout2.module.scss'
import MEMBERS_LIST from './Data/MEMBERS_LIST'
import undefined from '../img/team/undefined.png'
import Button from '../UI/Button'
import SOCIALS_LIST from './Data/SOCIALS_LIST'

function PageAbout() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <main className={styles.pageAbout}>
      <div className={styles.wrapper}>
        <Breadcrumb />
      </div>

      <section className={styles.aboutSection}>
        <div className={styles.wrapper}>
          <h1 className={styles.aboutTitle}>
            Небольшой текст или слоган
          </h1>

          <img className={styles.aboutImg} src="" alt=""/>

          <div className={styles.aboutDescription}>
            <p className={styles.aboutDescription1}>Наша компания — это команда профессионалов, работающих в сфере
              (укажите сферу деятельности компании). Мы
              предоставляем широкий спектр услуг и товаров, которые отличаются высоким качеством и соответствуют всем
              стандартам</p>

            <p className={styles.aboutDescription2}>Миссия нашей компании — предоставлять клиентам наилучший</p>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.wrapper}>
          <Title>История</Title>

          <ol className={styles.historyList}>
            <Marquee pauseOnHover="true" gradient="gradient" gradientColor="#D3D3D3" speed="30" style={{overflow: 'clip'}} >
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
              <li className={styles.historyItem}>
                <h3 className={styles.historyTitle}>2012</h3>
                <p>Тут текст информации по дате</p>
              </li>
            </Marquee>
          </ol>
        </div>
      </section>

      <section className={styles.cennosti}>
        <div className={styles.wrapper}>
          <Title>Наши ценности</Title>

          <ul className={styles.cennostiList}>
            <li className={styles.cennostiItem}>
              <h3 className={styles.cennostiTitle}>Ценность</h3>
            </li>

            <li className={styles.cennostiItem}>
              <h3 className={styles.cennostiTitle}>Ценность</h3>
            </li>

            <li className={styles.cennostiItem}>
              <h3 className={styles.cennostiTitle}>Ценность</h3>
            </li>

            <li className={styles.cennostiItem}>
              <h3 className={styles.cennostiTitle}>Ценность</h3>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.sfera}>
        <div className={styles.wrapper}>
          <Title>Сферы работы</Title>

          <div className={styles.sferaContainer}>
            <p className={styles.sferaImg}>
              <img src="" alt="" />
            </p>

            <ul className={styles.sferaList}>
              <li className={styles.sferaItem}>
                Сфера №1
              </li>
              <li className={styles.sferaItem}>
                Сфера №2
              </li>
              <li className={styles.sferaItem}>
                Сфера №3
              </li>
              <li className={styles.sferaItem}>
                Сфера №4
              </li>
              <li className={styles.sferaItem}>
                Сфера №5
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.rost}>
        <div className={styles.wrapper}>
          <div className={styles.rostContainer}>
            <div className={styles.rostDescription}>
              <h2 className={styles.rostTitle}>Темпы роста</h2>
              <p className={styles.rostText}>В последние годы компания активно расширяла свою деятельность, открывая новые филиалы и представительства в других регионах и странах. Также были запущены новые направления бизнеса, что позволило диверсифицировать портфель продуктов и услуг и укрепить позиции на рынке</p>

              <strong className={styles.rostProcent}>
                +98%<sup>/год</sup>
              </strong>
            </div>

            <p className={styles.rostImg}>
              <img src="" alt="" />
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.wrapper}>
          <Title>Наши сотрудники</Title>

          <ul className={styles.teamList}>
            {MEMBERS_LIST.map(({ id, position, name, photoUrl }) => {
              return (
                <li className={styles.teamItem} key={id}>
                  <figure className={styles.teamFigure}>
                    <figcaption className={styles.teamFigcaption}>
                      <h3 className={styles.teamName}>{name}</h3>
                      <p className={styles.teamDescription}>{position}</p>
                    </figcaption>

                    <img className={styles.teamImg} src={!!photoUrl ? photoUrl : undefined} alt={name} />
                  </figure>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <article className={styles.write}>
        <div className={styles.wrapper}>
          <h2 className={styles.writeTitle}>Напишите нам</h2>

          <div className={styles.writeContainer}>
            <form className={styles.writeForm}>
              <div className={styles.writeBlock}>
                <label className={'visually-hidden'} htmlFor="name">Ваше имя:</label>
                <input className={styles.input} type="text" name="name" id="name" maxLength="50" required
                       placeholder="Ваше имя"/>
              </div>

              <div className={styles.writeBlock}>
                <label className={'visually-hidden'} htmlFor="contacts">Контакты:</label>
                <input className={styles.input} type="text" name="contacts" id="contacts" maxLength="50" required
                       placeholder="Email / телефон"/>
              </div>

              <div className={styles.writeBlock}>
                <label className={'visually-hidden'} htmlFor="text">Заявка:</label>
                <input className={styles.input} type="text" name="text" id="text" maxLength="200" required placeholder="Введите ваш запрос"/>
              </div>

              <button className={styles.writeButton} type="submit">Связаться с нами</button>

              <ul className={styles.writeList}>
                {SOCIALS_LIST.map(item => (
                  <li className={styles.writeItem} key={item.name}>
                    <a className={styles.writeLink} href={item.url}>
                      {item.logo}
                      <span className="visually-hidden">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </form>

            <p className={styles.writePicture}>
              Здесь будет картинка
              <img className={styles.writeImg} src="" alt="" />
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default PageAbout;
