import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import BlockNavigation from './BlockNavigation'
import ABOUT_LIST from './Data/ABOUT_LIST'
import styles from '../styles/PageAbout.module.scss'

import AboutProjects from './AboutProjects'
import AboutNews from './AboutNews'
import AboutMain from './AboutMain'
import AboutTeam from './AboutTeam'

function PageAbout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className={styles.pageAbout}>
      <div className={styles.wrapper}>
        <Breadcrumb />

        <h1 className={styles.title}>
          <Link className={styles.link} to={'/about'}>{ABOUT_LIST.mainTitle}</Link>
        </h1>

        <div className={styles.mainContainer}>
          <BlockNavigation props={ABOUT_LIST} />

          <div className={styles.page}>
            <Routes>
              <Route index element={<AboutMain />} />
              <Route path="news" element={<AboutNews />} />
              <Route path="projects" element={<AboutProjects />} />
              <Route path="team" element={<AboutTeam />} />
              <Route path="*" element={<AboutMain />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageAbout;
