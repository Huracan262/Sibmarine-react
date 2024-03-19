import CATALOG_LIST from './Data/CATALOG_LIST'

function Catalog() {
  return (
    <section className="page-main__catalog main-catalog">
      <div className="wrapper animation-container">
        <h2 className="main-catalog__title">Каталог</h2>

        <ul className="main-catalog__list"> {CATALOG_LIST.map(item => (
          <li className="main-catalog__item" key={item.title}>
            <h3 className="main-catalog__item-title">{item.title}</h3>
            <img className="main-catalog__image" src="{item.src}" width="440" height="400" alt={item.title}/>
          </li>))}
        </ul>
      </div>
    </section>
  )
}

export default Catalog
