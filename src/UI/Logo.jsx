import {Link} from 'react-router-dom'

function Logo({size}) {
  return (
    <Link className="page-header__logo" to="/">
      <img src="/img/logo.png" width={size} height={size} alt="СибМарин | Продажа и обслуживание судового оборудования"/>
    </Link>
  )
}

export default Logo