import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Partners.scss';

const Partners = ({ title, partnerLogos, showButton, buttonText }) => {
  return (
    <section className="Partners">
      <div className="titre">
        <h1>{title}</h1>
      </div>
      <div className="logos">
        {partnerLogos.map((logo, index) => (
          <img src={logo} alt={`Logo partenaire ${index + 1}`} key={index} />
        ))}
      </div>
      {showButton && (
        <div className='butonContainer'>
            <button className="bouton">{buttonText}</button>          
        </div>
      )}
    </section>
  );
};

Partners.propTypes = {
  title: PropTypes.string.isRequired,
  partnerLogos: PropTypes.arrayOf(PropTypes.string).isRequired,
  showButton: PropTypes.bool,
  buttonText: PropTypes.string,
};

export default Partners;
