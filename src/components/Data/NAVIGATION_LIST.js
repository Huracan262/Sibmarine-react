import { FormatListBulleted, Construction, Info } from '@mui/icons-material'
import styles from '../../styles/mainNavigation.module.scss'

const NAVIGATION_LIST = [
  {
    label: 'Каталог',
    link: '/catalog',
    icon: <FormatListBulleted className={styles.icon} />
  }, {
    label: 'Услуги',
    link: '/service',
    icon: <Construction className={styles.icon} />
  }, {
    label: 'О компании',
    link: '/about',
    icon: <Info className={styles.icon} />
  }
]

export default NAVIGATION_LIST
