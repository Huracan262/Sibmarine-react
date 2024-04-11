import styles from '../styles/BlockNavigation.module.scss'

function BlockNavigation({ props }) {
  console.log(props)
  return (
    <>
      <ul className={styles.list}>
        {props.subTitle.map(item => {
          return (
            <li className={styles.item} key={item.title}>
              {item.title}
            </li>
          )})}

      </ul>
    </>
  )
}

export default BlockNavigation