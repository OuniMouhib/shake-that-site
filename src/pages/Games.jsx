import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Games.css';

const Games = () => {
  const [score, setScore] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [fish, setFish] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFish((prevFish) => [
        ...prevFish,
        {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - 100),
          y: 0,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setFish((prevFish) =>
        prevFish.map((item) => ({
          ...item,
          y: item.y + 2,
        }))
      );
    }, 50);

    return () => clearInterval(moveInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    setCharacterPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCatch = (id) => {
    setScore((prevScore) => prevScore + 10);
    setFish((prevFish) => prevFish.filter((fish) => fish.id !== id));
  };

  return (
    <div className="ocean-game-container" onMouseMove={handleMouseMove}>
      <motion.h1
        className="game-title"
        initial={{ opacity: 0, y: -50 }}
        animate={
          isScrolled
            ? { opacity: 1, y: 0, scale: 1.1 }
            : { opacity: 1, y: -50, scale: 1 }
        }
        transition={{ duration: 0.5, type: 'spring', damping: 10 }}
      >
        Fish Game
      </motion.h1>
      <div className="game-zone">
        <div className="score-display">Score: {score}</div>
        <motion.div
          className="character"
          style={{
            left: characterPosition.x - 25 + 'px',
            top: characterPosition.y - 25 + 'px',
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          🤿
        </motion.div>
        {fish.map((fish) => (
          <motion.div
            key={fish.id}
            className="fish"
            style={{
              position: 'absolute',
              left: fish.x + 'px',
              top: fish.y + 'px',
            }}
            onClick={() => handleCatch(fish.id)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            animate={isScrolled ? { y: [0, 10, -10, 0], opacity: [1, 0.8, 1, 1] } : { y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
          >
            🐟
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Games;
