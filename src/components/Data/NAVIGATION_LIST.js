import { FormatListBulleted, Construction, Info } from '@mui/icons-material'
import styles from '../../styles/mainNavigation.module.scss'

const NAVIGATION_LIST = [
  {
    label: 'Каталог',
    icon: <FormatListBulleted className={styles.icon} />
  }, {
    label: 'Услуги',
    icon: <Construction className={styles.icon} />
  }, {
    label: 'О компании',
    icon: <Info className={styles.icon} />
  }
]

export default NAVIGATION_LIST
