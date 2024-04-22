import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
// todo Изменить иконки на React-Icons
import { Menu, MenuOpen } from  '@mui/icons-material'
import Button from '../UI/Button'
import Contacts from './Contacts'
import Logo from '../UI/Logo'
import MainNavigation from './MainNavigation'
import Map from './Map'
import styles from '../styles/pageHeader.module.scss'
import ApplyFormModal from './ApplyFormModal'
import ApplyFormModalContext from '../contexts/ApplyFormModalContext'

function PageHeader() {
  const location = useLocation()

  const { setToggleModal } = useContext(ApplyFormModalContext)
  const [ mobileMenu, setMobileMenu ] = useState(true)

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      <header className={`${styles.pageHeader} ${location.pathname === '/' ? '' : styles.otherPageHeader}`}>
        <div className={`wrapper ${styles.wrapper}`}>
          <div className={styles.logo}>
            <Logo size={150} description={true}/>
          </div>

          <strong className={styles.title}>SIBMARINE</strong>
          <button className={styles.menu} onClick={toggleMobileMenu}>
            {mobileMenu ? <Menu className={styles.menuIcon}/> : <MenuOpen className={styles.menuIconOpen}/>}
          </button>

          <div className={styles.rows}>
            <div className={styles.container}>
              <Contacts />
              <Button onClick={setToggleModal}>Оставить заявку</Button>
            </div>

            <MainNavigation className={`${styles.navigation} ${mobileMenu && styles.mobileMenuClose}`}/>
          </div>
        </div>
      </header>

      <Map />
      <ApplyFormModal />
    </>
  )
}

export default PageHeader