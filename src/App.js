import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll'; // Adjust the path if necessary

import Footer from './components/Footer';
import Home from './pages/Home';
import Facts from './pages/Facts';
import Quiz from './pages/Quiz';
import Games from './pages/Games';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <SmoothScroll /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
