import { useState, useEffect, useRef } from 'react';
import SERVICE_LIST from './Data/SERVICE_LIST';
import Title from '../UI/Title';
import styles from '../styles/service.module.scss';

function Service() {
  const [current, setCurrent] = useState(SERVICE_LIST[0]);
  const [toggleList, setToggleList] = useState(false);
  const descriptionListRef = useRef(null);

  const handlerToggleCurrent = (item) => {
    item === current
      ? setToggleList(!toggleList)
      : !toggleList && setToggleList(!toggleList);
    setCurrent(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const { target } = event;
      if (
        !target.closest(`.${styles.item}`) &&
        !target.closest(`.${styles.descriptionList}`)
      ) {
        setToggleList(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setToggleList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleDescriptionItemClick = (event) => {
    event.stopPropagation();
  };

  return (
    <section className={styles.service}>
      <div className={styles.wrapper}>
        <Title to="service">Предоставляемые услуги</Title>

        <ul className={styles.list}>
          {SERVICE_LIST.map((item) => (
            <li
              className={`${styles.item} ${current === item && toggleList === true && styles.current}`}
              onClick={() => handlerToggleCurrent(item)}
              key={item.id}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemLogo}>{item.logo}</p>
            </li>
          ))}
        </ul>

        <ul
          ref={descriptionListRef}
          className={`${styles.descriptionList} ${toggleList && styles.listOn}`}
          onClick={handleDescriptionItemClick}
        >
          {current.submenu.map((item) => (
            <li className={styles.descriptionItem} key={item.id}>
              <a className={styles.descriptionLink}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Service;
