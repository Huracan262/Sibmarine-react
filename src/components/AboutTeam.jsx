import MEMBERS_LIST from './Data/MEMBERS_LIST'
import undefined from '../img/team/undefined.png'
import styles from '../styles/AboutTeam.module.scss'

function AboutTeam() {
  return (
    <ul className={styles.list}>
      {MEMBERS_LIST.map(({ id, position, name, photoUrl }) => {
        return (
          <li className={styles.item} key={id}>
            <figure className={styles.figure}>
              <figcaption className={styles.figcaption}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{position}</p>
              </figcaption>

              <img className={styles.img} src={!!photoUrl ? photoUrl : undefined} alt={name} />
            </figure>
          </li>
        )
      })}
    </ul>
  )
}

export default AboutTeam