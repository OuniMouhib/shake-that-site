import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Import the CSS file

import Facts from './Facts';
import Games from './Games';
import About from './About';
import Quiz from './Quiz';
import ocean from '../assets/ocean.png';
import Contact from './Contact';

const Home = () => {
  const text = "The ocean is a central part of the global ecosystem, and it connects all life on Earth. To protect it is not just to protect marine life, but to safeguard our future, our climate, and our very existence.";

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={ocean} alt="Ocean background" />
        <div className="hero">
          <div className="hero-text">
            <div className="animated-text">
              {text.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  style={{ display: 'inline-block', marginRight: '5px' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section id="facts" className="content-section">
        <Facts />
      </section>
      <section id="quiz" className="content-section">
        <Quiz />
      </section>
      <section id="games" className="content-section">
        <Games />
      </section>
      <section id="about" className="content-section">
        <About />
      </section>
      <section id="contact" className="content-section">
        <Contact />
      </section>

      
        
     
    </div>
  );
};

export default Home;
