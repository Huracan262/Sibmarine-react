import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
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
            что помогаем нашим клиентам достигать своих целей и решать различные задачи.</p>

          <Swiper className={styles.list} navigation={true} slidesPerView={5} modules={[Navigation]}>
            {CLIENTS_LIST.map(item => {
              return <SwiperSlide className={styles.item} key={item.title}>
                <img src={require(`../${item.src}`)} alt={item.title} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Clients