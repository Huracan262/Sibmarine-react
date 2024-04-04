import { FaWrench, FaClipboardCheck, FaTruck, FaHeadset, FaHammer } from 'react-icons/fa'

const SERVICE_LIST = [
  {
    title: 'Техническое обслуживание',
    logo: <FaWrench />,
    submenu: [
      { title: 'Установка, профилактика и ремонт судового оборудования', link: '' },
      { title: 'Разработка и согласование проектной документации', link: '' },
      { title: 'Оказание услуг БТО (Береговое Техническое Обслуживание)', link: '' },
      { title: 'Панорамная съемка помещений судна', link: '' },
      { title: 'Проектирование, сборка, монтаж электрощитов', link: '' },
      { title: 'Проектирование и монтаж гребных электростанций', link: '' },
      { title: 'Подбор, установка и подключение судовой автоматики', link: '' },
      { title: 'Быстрая подача заявки на сервисные работы online', link: '' },
      { title: 'Сертификаты БТО online', link: '' }
    ],
    current: false,
    id: 1
  }, {
    title: 'Ежегодные проверки',
    logo: <FaClipboardCheck />,
    submenu: [
      { title: 'Ежегодное освидетельствование оборудования', link: '' },
      { title: 'Штурманские приборы - проверка', link: '' },
      { title: 'Ежегодная проверка VDR (APT+COC)', link: '' },
      { title: 'Проверка систем судовой автоматики', link: '' },
      { title: 'Верификация', link: '' },
      { title: 'Профилактика оборудования', link: '' },
      { title: 'Проверка технического состояния электроустановок', link: '' }
    ],
    current: false,
    id: 2
  }, {
    title: 'Поставка оборудования',
    logo: <FaTruck />,
    submenu: [
      { title: 'Установка, профилактика и ремонт судового оборудования', link: '' },
      { title: 'Аренда судового радионавигационного оборудования', link: '' },
      { title: 'Коробочное снабжение', link: '' }
    ],
    current: false,
    id: 3
  }, {
    title: 'Техническая поддержка',
    logo: <FaHeadset />,
    submenu: [
      { title: 'Удаленная техническая поддержка', link: '' },
      { title: 'Обучение экипажей', link: '' }
    ],
    current: false,
    id: 4
  }, {
    title: 'Ремонт оборудования',
    logo: <FaHammer />,
    submenu: [
      { title: 'Установка, профилактика и ремонт судового оборудования', link: '' },
      { title: 'Сервисный ремонт судового оборудования', link: '' },
      { title: 'Техническое обслуживание и ремонт оборудования VSAT', link: '' },
      { title: 'Ремонт оборудования с подменой', link: '' },
      { title: 'Замена датчика эхолота', link: '' },
      { title: 'Судовые электромонтажные работы', link: '' },
      { title: 'Модернизация и проектирование судовых силовых сетей', link: '' },
      { title: 'Ремонт FleetBroadband', link: '' }
    ],
    current: false,
    id: 5
  }, {
    title: 'Техническое обслуживание',
    logo: <FaWrench />,
    submenu: [
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' }
    ],
    current: false,
    id: 6
  }, {
    title: 'Ежегодные проверки',
    logo: <FaClipboardCheck />,
    submenu: [
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' }
    ],
    current: false,
    id: 7
  }, {
    title: 'Поставка оборудования',
    logo: <FaTruck />,
    submenu: [
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' }
    ],
    current: false,
    id: 8
  }, {
    title: 'Техническая поддержка',
    logo: <FaHeadset />,
    submenu: [
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' }
    ],
    current: false,
    id: 9
  }, {
    title: 'Ремонт оборудования',
    logo: <FaHammer />,
    submenu: [
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' },
      { title: 'тест', link: '' }
    ],
    current: false,
    id: 10
  }
]

export default SERVICE_LIST