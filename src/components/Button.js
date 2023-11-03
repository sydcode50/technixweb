import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

const Button = ({ children, variant }) => {
  return <button className={`custom-button ${variant}`}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default Button;
