import { PiArrowRightThin } from "react-icons/pi";
import styles from '../styles/titleSection.module.scss'

function TitleSection(props) {
  return (
    <h2 className={styles.title}>{props.children}<PiArrowRightThin className={styles.arrow} /></h2>
  )
}

export default TitleSection
