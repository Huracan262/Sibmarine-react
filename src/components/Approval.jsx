import styles from '../styles/approval.module.scss'
import Title from '../UI/Title'

function Approval() {
  return (
    <section className={styles.approval}>
      <div className={styles.wrapper}>
        <Title>Одобрение компании</Title>

        <figure className="main-approval__certificate">
          <img className="certificate" src="" width="" height="" alt=""/>
          <figcaption className="description">Здесь будет сертификат РКО пацаны!</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Approval