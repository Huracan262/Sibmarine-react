import Banner from './Banner'
import Catalog from './Catalog'
import Service from './Service'
import Advantages from './Advantages'
import Partners from './Partners'
import Geography from './Geography'
import Clients from './Clients'
import Warranty from './Warranty'
import Approval from './Approval'
import Map from './Map'

function PageMain() {
  return (
    <main className="PageMain">
      <Banner />
      <Service />
      <Catalog />
      <Advantages />
      <Partners />
      <Geography />
      <Clients />
      <Warranty />
      {/*<Approval />*/}
      <Map />
    </main>
  )
}

export default PageMain