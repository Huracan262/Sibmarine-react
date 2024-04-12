import { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BlockNavigation from './BlockNavigation'
import ABOUT_LIST from './Data/ABOUT_LIST'
import styles from '../styles/PageAbout.module.scss'

function PageAbout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.pageAbout}>
      <div className={styles.wrapper}>
        <Breadcrumb />

        {/*todo Придумать что сделать с h1*/}
        <h1 className={styles.title}>{ABOUT_LIST.mainTitle}</h1>

        <div className={styles.mainContainer}>
          <BlockNavigation props={ABOUT_LIST} />

          <div className={styles.page}>

          </div>
        </div>
      </div>
    </main>
  )
}

export default PageAbout