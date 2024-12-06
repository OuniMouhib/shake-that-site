import React from 'react';
import { motion } from 'framer-motion';
import './Facts.css';

const facts = [
  "The ocean regulates Earth's temperature.",
  "Over 50% of oxygen comes from the ocean.",
  "There are 3 million shipwrecks under the ocean.",
  "The deepest part of the ocean is the Mariana Trench.",
  "The ocean covers 71% of Earth's surface.",
  "More than 80% of the ocean is unexplored and unmapped.",
  "The ocean is home to the largest animal on Earth, the blue whale.",
  "Coral reefs support 25% of all marine species.",
  "The Atlantic Ocean is the second-largest ocean on Earth.",
  "Some fish can change their gender in response to environmental changes.",
];

const Facts = () => {
  const leftColumnFacts = facts.filter((_, index) => index % 2 === 0);
  const rightColumnFacts = facts.filter((_, index) => index % 2 !== 0);

  return (
    <div className="facts-wrapper">
      <h1 className="facts-title">Ocean Facts</h1>
      <div className="facts-container">
        <div className="facts-column">
          {leftColumnFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="fact-item"
            >
              <p>{fact}</p>
            </motion.div>
          ))}
        </div>
        <div className="facts-column">
          {rightColumnFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="fact-item"
            >
              <p>{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
