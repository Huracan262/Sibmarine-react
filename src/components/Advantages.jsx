import ADVANTAGES_LIST from './Data/ADVANTAGES_LIST'

function Advantages() {
  return (
    <section className="page-main__advantages main-advantages">
      <div className="wrapper animation-container">
        <h2 className="main-advantages__title">Преимущества</h2>

        <ul className="main-advantages__list">
          {ADVANTAGES_LIST.map(item => (
            <li className="main-advantages__item" key={item}>
              {item}
            </li>))}
        </ul>
      </div>
    </section>
  )
}

export default Advantages