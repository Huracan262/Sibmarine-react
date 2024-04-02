import {useContext, useState} from 'react'
import {BsX} from "react-icons/bs"
import styles from '../styles/map.module.scss'
import MapContext from '../contexts/MapContext'

function Map() {
  const {toggleMap, setToggleMap} = useContext(MapContext)

  if (toggleMap)
  return (
    <div className={styles.map}>
      <a href="https://yandex.ru/maps/org/sibmarin_treyd/5984820350/?utm_medium=mapframe&utm_source=maps" className={styles.el1}>СибМарин Трейд</a>
      <a href="https://yandex.ru/maps/62/krasnoyarsk/category/ship_equipment/184106624/?utm_medium=mapframe&utm_source=maps" className={styles.el2}>Судовое оборудование в Красноярске</a>
      <a href="https://yandex.ru/maps/62/krasnoyarsk/category/electrical_products/184107066/?utm_medium=mapframe&utm_source=maps" className={styles.el3}>Электротехническая продукция в Красноярске</a>
      <iframe src="https://yandex.ru/map-widget/v1/?ll=92.869438%2C55.978822&mode=search&oid=5984820350&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXVY4ZaPN1dAEeif4GJF%2FUtAEhIJ8IgK1c3Fjz8RDMwKRbqfcz8iBgABAgMEBSgKOABAqs0GSAFqAnJ1nQHNzEw9oAEAqAEAvQFB0i%2BGwgELrbOw%2Bf8F%2FrjkpRaCAhDQodC40LHQnNCw0YDQuNC9igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=92.869438%2C55.978822&sspn=0.009894%2C0.004171&tab=reviews&text=%D0%A1%D0%B8%D0%B1%D0%9C%D0%B0%D1%80%D0%B8%D0%BD&z=17.19" width="1000" height="500" frameBorder="0" allowFullScreen="true" className={styles.el4}></iframe>
      <button className={styles.button} onClick={() => setToggleMap(!toggleMap)}>
        <BsX className={styles.buttonClose} />
      </button>
    </div>
  )
}

export default Map
