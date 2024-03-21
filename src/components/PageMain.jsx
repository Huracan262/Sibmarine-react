import Banner from './Banner'
import Catalog from './Catalog'
import Service from './Service'
import Advantages from './Advantages'
import Partners from './Partners'
import Geography from './Geography'
import Clients from './Clients'
import Warranty from './Warranty'
import Approval from './Approval'

function PageMain() {
  return (
    <main className="PageMain">
      <Banner />
      <Catalog />
      <Service />
      <Advantages />
      <Partners />
      <Geography />
      <Clients />
      <Warranty />
      <Approval />
    </main>
  )
}

export default PageMain