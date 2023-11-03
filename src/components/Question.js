// Question.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Question.scss';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`question ${isOpen ? 'open' : ''}`}>
      <div className="question-text" onClick={toggleAnswer}>
        <span>{question}</span>
        <div className={`arrow ${isOpen ? 'open' : ''}`}>&gt;</div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
