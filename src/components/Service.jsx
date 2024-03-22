import {useState} from 'react'
import SERVICE_LIST from './Data/SERVICE_LIST'
import TitleSection from '../UI/Title'
import styles from '../styles/service.module.scss'

function Service() {
  const [toggleCurrent, setToggleCurrent] = useState(SERVICE_LIST[0])

  const handlerCurrentItem = item => {
    setToggleCurrent(item)
  }

  return (
    <section className="page-main__service main-service">
      <div className={styles.wrapper} >
        <TitleSection className="main-service__title">Услуги</TitleSection>

        <div className={styles.serviceWrapper}>
          <img className="Alo" src="../img/service/service-1.jp" width="400" height="400" alt={toggleCurrent.title} />

          <ul className={styles.list}>
            {SERVICE_LIST.map(item => (
              <li className={`${styles.item} ${toggleCurrent.id === item.id && styles.current}`} key={item.id}>
                <button className={styles.button} onClick={() => handlerCurrentItem(item)}>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Service