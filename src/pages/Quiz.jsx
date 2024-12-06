import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    { question: "How much of Earth's surface is ocean?", options: ['50%', '70%', '80%', '90%'], answer: 1 },
    { question: "What is the largest ocean?", options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 2 },
    { question: "What percentage of marine life has not been discovered?", options: ['80%', '90%', '50%', '60%'], answer: 1 },
    { question: "Which ocean is the deepest?", options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 2 },
    { question: "How many species of fish live in the ocean?", options: ['30,000', '10,000', '50,000', '100,000'], answer: 0 },
    { question: "What is the largest animal in the ocean?", options: ['Great white shark', 'Blue whale', 'Giant squid', 'Orca'], answer: 1 },
    { question: "What do corals need to survive?", options: ['Sunlight', 'Water temperature', 'Nutrients', 'All of the above'], answer: 3 },
    { question: "What is the smallest ocean?", options: ['Indian', 'Atlantic', 'Arctic', 'Southern'], answer: 2 },
    { question: "How much of Earth's oxygen comes from the ocean?", options: ['10%', '30%', '50%', '70%'], answer: 2 },
    { question: "What is the average depth of the ocean?", options: ['1,000m', '2,000m', '3,000m', '4,000m'], answer: 2 },
  ];

  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const quizRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (quizRef.current) {
        const rect = quizRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
      setFeedback("🎉 Correct!");
    } else {
      setFeedback("😢 Wrong!");
    }
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setFeedback("");
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      }
    }, 2000);
  };

  return (
    <div className="quiz-container" ref={quizRef}>
      <motion.h1
        className="quiz-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1.5,
          type: 'spring',
          stiffness: 100,
          damping: 10,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.15, rotate: 2 }}
      >
        Ocean Quiz
      </motion.h1>
      {current < questions.length ? (
        <motion.div
          className="quiz-question-container"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 2.5, type: 'spring', stiffness: 100 }}
        >
          <motion.p
            className="quiz-question"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 2.5 }}
          >
            {questions[current].question}
          </motion.p>
          <div className="quiz-options">
            {questions[current].options.map((option, index) => (
              <motion.button
                key={index}
                className="quiz-option"
                onClick={() => handleAnswer(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
          {showFeedback && (
            <motion.div
              className="feedback"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, duration: 1 }}
              onAnimationComplete={() => {
                setFeedback("");
                setShowFeedback(false);
              }}
            >
              <p className="feedback-text">{feedback}</p>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className="quiz-result-container"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 2.5, type: 'spring', stiffness: 100 }}
        >
          <h2>Your Score: {score}/{questions.length}</h2>
          <p className="quiz-message">Thank you for playing!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
