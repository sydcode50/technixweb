import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from './Logo';
import LightBall from './LightBall';
import '../styles/Header.scss';
import Section from './Section';
import image1 from '../assets/images/image1.jpg';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Détecte les écrans de 768px ou moins
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <LightBall className="lumiere" position="left" intensity={1} />
      <nav className={`navbar ${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
        <Logo />
        {isMobile && (
          <button className={`menu-button ${menuOpen ? 'menu-close' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        {(!isMobile || menuOpen) && (
          <ul className={`navbar-item ${menuOpen ? 'open' : ''}`}>
            <li><a href="#" className="navbar-link">About</a></li>
            <li><a href="#" className="navbar-link">Offers</a></li>
            <li><a href="#" className="navbar-link">FAQ</a></li>
            <li><a href="#" className="navbar-link">Contact</a></li>
          </ul>
        )}
        {(!isMobile || menuOpen) && (
          <div className={`search-bar ${menuOpen ? 'open' : ''}`}>
            <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="search-icon">
  <path d="M19.6967 18.3984L14.4609 13.1641C15.594 11.7773 16.2192 10.0312 16.2192 8.125C16.2192 3.63672 12.5803 0 8.09202 0C3.60371 0 0 3.63789 0 8.125C0 12.6121 3.63848 16.25 8.09202 16.25C9.99839 16.25 11.7473 15.5895 13.1324 14.4906L18.3682 19.725C18.587 19.9102 18.8293 20 19.0676 20C19.306 20 19.5474 19.9084 19.7307 19.7254C20.0952 19.3594 20.0952 18.7656 19.6967 18.3984ZM1.87551 8.125C1.87551 4.67891 4.68017 1.875 8.12719 1.875C11.5742 1.875 14.3789 4.67891 14.3789 8.125C14.3789 11.5711 11.5742 14.375 8.12719 14.375C4.68017 14.375 1.87551 11.5703 1.87551 8.125Z" fill="white" fill-opacity="0.55"/>
          </svg>
          </div>
        )}
        
      </nav>

    
      <LightBall position="left" intensity={1} />
      <Section className="section"
        imagePosition="right"
        title="OUTSOURCING  AGENCY"
        description="At TECHNIX, we carve the future of printing with a fervor for innovation and a commitment to excellence. Just like a skilled artisan, we sculpt each aspect of print outsourcing to create masterpieces. Inspired by the impact of online visibility, we optimize your print processes for results that inspire."
        primaryButtonText="START WITH US"
        secondaryButtonText="GET MORE INFORMATIONS"
        imageSrc={image1} // Utilisez l'image Sque vous souhaitez ici
      />

    </header>
  );
};

export default Header;
