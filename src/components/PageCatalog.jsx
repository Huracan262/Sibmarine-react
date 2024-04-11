import styles from '../styles/pageCatalog.module.scss'
import Breadcrumb from './Breadcrumb'

function PageCatalog() {
  return (
    <main className={styles.pageCatalog}>
      <div className={styles.wrapper}>
        <Breadcrumb />
      </div>
    </main>
  )
}

export default PageCatalog