import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import PageMain from './components/PageMain'
import PageNotFound from './components/PageNotFound'
import PageCatalog from './components/PageCatalog'
import './styles/app.scss'
import MapContext from './contexts/MapContext'
import {useState} from 'react'

function App() {
  const [toggleMap, setToggleMap] = useState(false)

  return (
    <BrowserRouter>
      <MapContext.Provider value={{toggleMap, setToggleMap}}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PageMain />} />
            <Route path="/catalog" element={<PageCatalog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </MapContext.Provider>
    </BrowserRouter>
  );
}

export default App;