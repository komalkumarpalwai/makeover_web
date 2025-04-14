import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
