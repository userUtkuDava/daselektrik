import './App.css';
import Menu from './Components/nav/Menu';
import İnfoHead from './Components/info-head/İnfo';
import İletisim from './Components/pages/iletişim/İletişim';
import Hizmetler from './Components/pages/hizmetler/Hizmetler';
import Blog from './Components/pages/blog/Blog';
import Hakkımızda from './Components/pages/hakkımızda/Hakkımızda';
import Katalog from './Components/pages/katalog/Katalog';
import NotFound from './Components/notfound/NotFound';
import Home from './Components/anasayfa/Home';
import BlogDetail from './Components/pages/blog/BlogDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpButton from './Components/anasayfa/upbutton/UpButton';
import { useEffect } from 'react';
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/iletisim" element={<İletisim />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hakkımızda" element={<Hakkımızda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <UpButton />
      <Footer />
    </>
  );
}

export default App;
