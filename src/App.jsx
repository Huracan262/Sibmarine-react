import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import PageMain from './components/PageMain';
import NotFound from './components/NotFound';
import PageCatalog from './components/PageCatalog';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageMain />} />
          <Route path="/catalog" element={<PageCatalog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;