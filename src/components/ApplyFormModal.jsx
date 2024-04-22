import {useContext, useEffect} from 'react'
import { BsX } from "react-icons/bs"
import ApplyFormModalContext from '../contexts/ApplyFormModalContext'
import styles from '../styles/ApplyFormModal.module.scss'
import Button from '../UI/Button'

function ApplyFormModal() {
  const { toggleModal, setToggleModal } = useContext(ApplyFormModalContext)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setToggleModal(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleModal, setToggleModal])

  if (toggleModal)
  return (
    <aside className={styles.modal}>
      <h2 className={styles.title}>Оставить заявку</h2>

      <form className={styles.form}>
        <div className={styles.block}>
          <label className={styles.label} htmlFor="name">Ваше имя:</label>
          <input className={styles.input} type="text" name="name" id="name" maxLength="50" required placeholder="Ваше имя" />
        </div>

        <div className={styles.block}>
          <label className={styles.label} htmlFor="contacts">Контакты:</label>
          <input className={styles.input} type="text" name="contacts" id="contacts" maxLength="50" required placeholder="email / телефон"/>
        </div>

        <div className={styles.block}>
          <label className={styles.label} htmlFor="text">Заявка:</label>
          <textarea className={styles.input} name="text" id="text" rows={10} maxLength="200" required spellCheck="true" placeholder="Введите ваш запрос" />
        </div>

        <Button className={styles.submit} type="submit">Отправить</Button>
      </form>

      <BsX className={styles.close} onClick={() => setToggleModal(false)} />
    </aside>
  )
}

export default ApplyFormModal