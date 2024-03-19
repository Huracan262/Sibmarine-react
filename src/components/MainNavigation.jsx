import NAVIGATION_LIST from './Data/NAVIGATION_LIST'

function MainNavigation() {
  return (
    <nav className="page-header__navigation main-navigation">
      <ul className="main-navigation__list">
        {NAVIGATION_LIST.map(item => (
          <li className="main-navigation__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation