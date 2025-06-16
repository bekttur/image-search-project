import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import Favorites from './pages/favorites/favorites';
import Header from './modules/header/header';
import Footer from './modules/footer/footer';
import ImageDetail from './pages/image-detail/image-detail';
import { FavoritesProvider } from './context/favorites-context';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/image/:id' element={<ImageDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
