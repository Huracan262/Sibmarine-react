import AboutNews from '../AboutNews'
import AboutProjects from '../AboutProjects'
import AboutLicenses from '../AboutLicenses'

const ABOUT_LIST = {
  mainTitle: 'О компании',
  link: '',
  subTitle: [
    {
      title: 'Новости',
      link: '/about/news',
      block: <AboutNews />,
    },
    {
      title: 'Наши проекты',
      link: '/about/projects',
      block: <AboutProjects />,
    },
    {
      title: 'Сертификаты и лицензии',
      link: '/about/licenses',
      block: <AboutLicenses />,
    },
    {
      title: 'Контакты',
      link: '/about/contacts',
    }
  ]
}





export default ABOUT_LIST