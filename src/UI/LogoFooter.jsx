import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../img/logo-footer.svg';
import styles from '../styles/pageFooter.module.scss'

function LogoFooter({ size, description = false }) {
  return (
    <>
      <Link className={styles.logo} to="/">
        <LogoImage width={size} height={size} />
      </Link>
      {description && <strong className={styles.description}>Продажа и обслуживание судового оборудования</strong>}
    </>

  )
}

export default LogoFooter;