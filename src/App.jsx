import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapContext from './contexts/MapContext'
import ApplyFormModalContext from './contexts/ApplyFormModalContext'
import MainLayout from './components/layouts/MainLayout'
import PageMain from './components/PageMain'
import PageNotFound from './components/PageNotFound'
import PageCatalog from './components/PageCatalog'
import PageAbout from './components/PageAbout'
import PageAbout2 from './components/PageAbout2'
import PageService from './components/PageService'
import './styles/app.scss'

function App() {
  const [ toggleMap, setToggleMap ] = useState(false)
  const [ toggleModal, setToggleModal ] = useState(false)

  return (
    <BrowserRouter>
      <MapContext.Provider value={{toggleMap, setToggleMap}}>
        <ApplyFormModalContext.Provider value={{ toggleModal, setToggleModal }}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<PageMain />} />
              <Route path="catalog" element={<PageCatalog />} />
              <Route path="about/*" element={<PageAbout />} />
              <Route path="about2/*" element={<PageAbout2 />} />
              <Route path="service" element={<PageService />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </ApplyFormModalContext.Provider>
      </MapContext.Provider>
    </BrowserRouter>
  )
}

export default App;
