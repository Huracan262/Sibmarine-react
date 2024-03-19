import Contacts from './Contacts'
import Button from '../UI/Button'
import Logo from '../UI/Logo'
import MainNavigation from './MainNavigation'
import styles from '../styles/pageHeader.scss'

function PageHeader() {
  return (
    <header className="page-header">
      <div className="wrapper">
        <Contacts />
        <Button text="Оставить заявку" />
      </div>

      <div className="wrapper">
        <Logo size={100} />
        <strong className="page-header__company-name">Продажа и обслуживание судового оборудования</strong>
        <MainNavigation />
      </div>
    </header>
  )
}

export default PageHeader