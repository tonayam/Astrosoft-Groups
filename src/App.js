import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import { Footer, MiniFooter } from './components/Footer/Footer.jsx';

// PAGES WITHOUT AUTH
import { About, ContactUs, Home, OurTeam, Services } from './pages';
import { useGlobalContext } from './context/context.jsx';

function App() {
  const { pathname } = useLocation();
  const { showNav } = useGlobalContext();

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
  }, [showNav]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
      <MiniFooter />
    </>
  );
}

export default App;
