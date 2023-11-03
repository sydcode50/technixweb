import React from 'react';
import Button from './Button'; // Importez le composant Button ici
import '../styles/Section.scss';

const Section = (props) => {
  const { imagePosition, title, description, primaryButtonText, secondaryButtonText, imageSrc } = props;

  return (
    <section className={`section ${imagePosition}`}>
      <div className="image">
        <img src={imageSrc} alt="Section Image" />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="buttons">
          {primaryButtonText && <Button variant="primary">{primaryButtonText}</Button>}
          {secondaryButtonText && <Button variant="secondary">{secondaryButtonText}</Button>}
        </div>
      </div>
    </section>
  );
};

export default Section;
