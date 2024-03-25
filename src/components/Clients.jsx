import Title from '../UI/Title'
import styles from '../styles/clients.module.scss'
import CLIENTS_LIST from './Data/CLIENTS_LIST'

function Clients() {
  return (
    <section className={styles.clients}>
      <div className={styles.wrapper}>
        <Title>Наши клиенты</Title>

        <div className={styles.container}>
          <p className={styles.description}>Клиенты - основа любой компании. Именно благодаря им мы растём,
            развиваемся и делаем нашу компанию лучше каждый день. Мы гордимся тем,
            что помогаем нашим клиентам достигать своих целей и решать различные задачи</p>

          <ul className={styles.list}>
            {CLIENTS_LIST.map(item => {
              return <li className={styles.item} key={item.title}>
                <img src={require(`../${item.src}`)} alt={item.title} />
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Clients