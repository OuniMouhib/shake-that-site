import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollThresholds = {
    title: 100,
    p1: 150,
    p2: 300,
    p3: 450,
  };

  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: scrollY > scrollThresholds.title ? 1 : 0, y: scrollY > scrollThresholds.title ? 0 : -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        About the Team
      </motion.h1>

      <div className="about-content">
        <motion.div
          className="about-column middle"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: scrollY > scrollThresholds.p1 ? 1 : 0, scale: scrollY > scrollThresholds.p1 ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > scrollThresholds.p1 ? 1 : 0, y: scrollY > scrollThresholds.p1 ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            We are a group of dedicated ocean lovers committed to preserving and protecting our marine environments. Our mission is to inspire people to join us in making a positive impact on the health of our oceans.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-column right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: scrollY > scrollThresholds.p2 ? 1 : 0, x: scrollY > scrollThresholds.p2 ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > scrollThresholds.p2 ? 1 : 0, y: scrollY > scrollThresholds.p2 ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            The ocean is a vital part of our ecosystem, providing us with clean air, food, and regulating the Earth's climate. It is essential for life on our planet, making ocean conservation a top priority.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-column left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: scrollY > scrollThresholds.p3 ? 1 : 0, x: scrollY > scrollThresholds.p3 ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > scrollThresholds.p3 ? 1 : 0, y: scrollY > scrollThresholds.p3 ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            By protecting our oceans, we are ensuring the well-being of marine life and contributing to a more sustainable future for all. We encourage everyone to understand the importance of the oceans and participate in efforts to reduce pollution and support conservation initiatives.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
