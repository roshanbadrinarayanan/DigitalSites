import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Style.css";
import Nav from './Nav';
import Home from './Homepage';
import Footer from './Footer';
import Contact from './ContactPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
