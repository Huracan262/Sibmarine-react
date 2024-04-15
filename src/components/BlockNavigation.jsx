import { NavLink } from 'react-router-dom'
import styles from '../styles/BlockNavigation.module.scss'

function BlockNavigation({ props }) {
  console.log(props)
  return (
    <>
      <ul className={styles.list}>
        {props.subTitle.map(item => {
          return (
            <li className={styles.item} key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          )})}

      </ul>
    </>
  )
}

export default BlockNavigation