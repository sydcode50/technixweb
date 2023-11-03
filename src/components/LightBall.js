import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LightBall.scss';

const LightBall = ({ position, intensity }) => {
  return <div className={`light-ball ${position}`} style={{ opacity: intensity }} />;
};

LightBall.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  intensity: PropTypes.number.isRequired,
};

export default LightBall;
