import styles from "../styles/PageService.module.scss";
import Breadcrumb from './Breadcrumb'

function PageService() {
  return (
    <main className={styles.pageService}>
      <div className={styles.wrapper}>
        <Breadcrumb />
      </div>
    </main>
  )
}

export default PageService