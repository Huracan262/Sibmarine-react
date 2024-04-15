import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapContext from './contexts/MapContext'
import MainLayout from './components/layouts/MainLayout'
import PageMain from './components/PageMain'
import PageNotFound from './components/PageNotFound'
import PageCatalog from './components/PageCatalog'
import PageAbout from './components/PageAbout'
import PageService from './components/PageService'
import './styles/app.scss'

import AboutMain from './components/AboutMain'
import AboutProjects from './components/AboutProjects'
import AboutNews from './components/AboutNews'

function App() {
  const [toggleMap, setToggleMap] = useState(false)

  return (
    <BrowserRouter>
      <MapContext.Provider value={{toggleMap, setToggleMap}}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PageMain />} />
            <Route path="catalog" element={<PageCatalog />} />
            <Route path="about" element={<PageAbout />}>
              <Route index element={<AboutMain />} />  // Если есть AboutMain
              <Route path="news" element={<AboutNews />} />
              <Route path="projects" element={<AboutProjects />} />
            </Route>
            <Route path="service" element={<PageService />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </MapContext.Provider>
    </BrowserRouter>
  );
}

export default App;
