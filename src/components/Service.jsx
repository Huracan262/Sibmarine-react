import {useState} from 'react'
import SERVICE_LIST from './Data/SERVICE_LIST'
import TitleSection from '../UI/Title'
import styles from '../styles/service.module.scss'

function Service() {
  const [current, setCurrent] = useState(SERVICE_LIST[0])
  const [toggleList, setToggleList] = useState(false)

  const handlerToggleCurrent = item => {
    item === current
      ? setToggleList(!toggleList)
      : !toggleList && setToggleList(!toggleList)
    setCurrent(item)
  }

  return (
    <section className={styles.service}>
      <div className={styles.wrapper} >
        <TitleSection>Предоставляемые услуги</TitleSection>

        <ul className={styles.list}>
          {SERVICE_LIST.map(item => (
            <li className={`${styles.item} ${current === item && toggleList === true && styles.current}`} onClick={() => handlerToggleCurrent(item)} key={item.id}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemLogo}>{item.logo}</p>
            </li>
          ))}
        </ul>


        <ul className={`${styles.descriptionList} ${toggleList && styles.listOn}`}>
          {current.submenu.map(item => (
            <li className={styles.descriptionItem}>
              <a className={styles.descriptionLink}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Service