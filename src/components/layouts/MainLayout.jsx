import {Outlet} from 'react-router-dom'
import PageHeader from '../PageHeader'
import PageFooter from '../PageFooter'

function MainLayout() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  )
}

export default MainLayout