import './App.css';
import Menu from './Components/nav/Menu';
import İnfoHead from './Components/info-head/İnfo';
import İletisim from './Components/pages/iletişim/İletişim';
import Hizmleter from './Components/pages/hizmetler/Hizmetler';
import Blog from './Components/pages/blog/Blog';
import Hakkımızda from './Components/pages/hakkımızda/Hakkımızda';
import Katalog from './Components/pages/katalog/Katalog';
import NotFound from './Components/notfound/NotFound';
import Home from './Components/anasayfa/Home';
import BlogDetail from './Components/pages/blog/BlogDetail';
import { Routes, Route, useLocation } from 'react-router-dom';
import UpButton from './Components/anasayfa/upbutton/UpButton';
import { useEffect, useState } from 'react';
import Footer from './Components/footer/Footer';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <İnfoHead />

      <nav>
        <Menu />

        <Routes>
          <Route path='/daselektrik' element={<Home />}></Route>
          <Route path='/daselektrik/katalog' element={<Katalog />}></Route>
          <Route path='/daselektrik/blog/:id' element={<BlogDetail />}></Route>
          <Route path='/daselektrik/İletisim' element={<İletisim />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/daselektrik/hizmetler' element={<Hizmleter />}></Route>
          <Route path='/daselektrik/blog' element={<Blog />}></Route>
          <Route path='/daselektrik/hakkımızda' element={<Hakkımızda />}></Route>
        </Routes>
      </nav>

      <UpButton />
      <Footer />
    </>
  );
}



export default App;
