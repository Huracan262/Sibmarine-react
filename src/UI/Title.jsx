import { Link } from 'react-router-dom'
import { PiArrowRightThin } from 'react-icons/pi'
import styles from '../styles/titleSection.module.scss'

function TitleSection({ children, to }) {
  return (
    <Link className={styles.link} to={to}>
      <h2 className={styles.title}>
        {children}
        <PiArrowRightThin className={styles.arrow} />
      </h2>
    </Link>
  )
}

export default TitleSection
