import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/ShopCollection';
import Story from './pages/OurStory';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Codebar from './component/Codebar'
import Menu from './component/Menu'
import Cart from './component/Cart'
import Footer from './component/Footer'
import StickySocial from './component/StickySocial';


function App () {
  return (
    <div className='main'>
      <Codebar/>
      <h1>happy kids</h1>
      <Menu />
      <Cart/>
      <StickySocial/>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/story" element={<Story />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
