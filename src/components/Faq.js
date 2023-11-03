// FAQ.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Faq.scss';
import Question from './Question.js'; // Importez le composant Question

const FAQ = ({ questions }) => {
  return (
    <div className="faq">
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

FAQ.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQ;
