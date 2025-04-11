import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import 'swiper/css';
import 'swiper/css/pagination';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;