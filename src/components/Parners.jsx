import PARTNERS_LIST from './Data/PARTNERS_LIST'

function Parners () {
  return (
    <section className="page-main__partners main-partners">
      <div className="wrapper animation-container">
        <h2 className="main-partners__title">Партнеры</h2>

        <ul className="main-partners__list">
          {PARTNERS_LIST.map(item => (
            <li className="main-partners__item" key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Parners