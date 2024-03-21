import ADVANTAGES_LIST from './Data/ADVANTAGES_LIST'
import TitleSection from '../UI/Title'

function Advantages() {
  return (
    <section className="page-main__advantages main-advantages">
      <div className="wrapper animation-container">
        <TitleSection className="main-advantages__title">Преимущества</TitleSection>

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