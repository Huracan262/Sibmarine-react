import styles from '../styles/warranty.module.scss'
import Title from '../UI/Title'

function Warranty() {
  return (
    <section className={styles.warranty}>
      <div className={styles.wrapper}>
        <Title>Гарантии</Title>

        <ul className={styles.list}>
          <li className="main-warranty__item">
            <h3 className="main-warranty__item-title">Гарантия на услуги</h3>

            <p className="main-warranty__description">Гарантия на услуги - это важный аспект,
              который обеспечивает клиентам уверенность в качестве предоставляемых услуг</p>
            <img className="main-warranty__image" src="" width="" height="" alt=""/>
          </li>
          <li className="main-warranty__item">
            <h3 className="main-warranty__item-title">Гарантия на товары от завода-производителя товаров</h3>

            <p className="main-warranty__description">Они гарантируют соответствие товаров определённым стандартам и
              требованиям,
              а также предоставление ожидаемого результата от использования продукта</p>
            <img className="main-warranty__image" src="" width="" height="" alt=""/>
          </li>
          <li className="main-warranty__item">
            <h3 className="main-warranty__item-title">Тех. поддержка</h3>

            <p className="main-warranty__description">Наличие технической поддержки свидетельствует о внимании
              компании к своим клиентам
              и заботе о качестве предоставляемых продуктов и услуг</p>
            <img className="main-warranty__image" src="" width="" height="" alt=""/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Warranty