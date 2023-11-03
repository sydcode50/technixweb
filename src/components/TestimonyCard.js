import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TestimonyCard.scss';

const TestimonyCard = ({ imageSrc, name, date, testimony }) => {
  return (
    <div className="testimony-card">
      <div className="testimony-top">
        <div className="testimony-image">
          <img src={imageSrc} alt="Testimony" />
        </div>
        <div className="testimony-details">
          <div className="testimony-name">{name}</div>
          <div className="testimony-date">{date}</div>
        </div>
      </div>
      <div className="testimony-content">{testimony}</div>
    </div>
  );
};

TestimonyCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  testimony: PropTypes.string.isRequired,
};

export default TestimonyCard;
