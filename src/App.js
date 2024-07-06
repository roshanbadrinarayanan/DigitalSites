import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Style.css";
import Nav from './Nav';
import Home from './Homepage';
import Footer from './Footer';
import Contact from './ContactPage';
import { FaArrowUp } from 'react-icons/fa';
import DigitalMarketing from './DigitalMarketing';
import { HelmetProvider } from 'react-helmet-async';
import Services from './Services';


function App() {

  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, 0); // Fallback for browsers that don't support smooth scrolling
    }
};

  return (
    <HelmetProvider>
      <Router>
        <div className='App'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/digital-marketing' element={<DigitalMarketing />} />
            <Route path='/services' element={<Services />} />
          </Routes>
          <Footer />
          <button className="scroll-to-top" onClick={scrollToTop}><h7>Back to top</h7>
            <FaArrowUp />
          </button>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
