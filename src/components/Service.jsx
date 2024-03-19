import SERVICE_LIST from './Data/SERVICE_LIST'

function Service() {
  return (
    <section className="page-main__service main-service">
      <div className="wrapper animation-container">
        <h2 className="main-service__title">Услуги</h2>

        <div className="main-service__wrapper">
          {/*Необходимо настроить изображение*/}
          <img className="main-service__picture" alt="" />

          <ul className="main-service__list">
            {SERVICE_LIST.map(item => (
              <li className="main-service__item main-service__item--current" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Service