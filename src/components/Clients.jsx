import Marquee from 'react-fast-marquee'
import Title from '../UI/Title'
import styles from '../styles/clients.module.scss'
import CLIENTS_LIST from './Data/CLIENTS_LIST'


//todo Удалить NPM пакеты switcher и material
function Clients() {
  return (
    <section className={styles.clients}>
      <div className={styles.wrapper}>
        <Title to="about/projects">Наши клиенты</Title>

        <div className={styles.container}>
          <p className={styles.description}>Клиенты - основа любой компании. Именно благодаря им мы растём,
            развиваемся и делаем нашу компанию лучше каждый день. Мы гордимся тем,
            что помогаем нашим клиентам достигать своих целей и решать различные задачи.</p>

          <ul className={styles.list}>
            <Marquee direction="right" speed="30" gradient="gradient" gradientColor="#162639" style={{overflow: 'clip'}}>
              {CLIENTS_LIST.map(item => (
                <li className={styles.item} key={item.title}>
                  <img src={require(`../${item.src}`)} alt={item.title} />
                </li>
              ))}
            </Marquee>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Clients