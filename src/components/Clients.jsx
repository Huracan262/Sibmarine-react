import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
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

          <Swiper className={styles.list} effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={5}
                  spaceBetween={20}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,}}
                    pagination={true}
                    perw
                    modules={[EffectCoverflow, Pagination]}>
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