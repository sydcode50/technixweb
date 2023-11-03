import React from 'react';
import '../styles/Footer.scss';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-first'>
        <Logo />
        <span>Copyright @ 2023</span>
      </div>
      <div className='footer-second'>
        <span className='title'>Why trust us ?</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Linkedin</span>
      </div>
      <div className='footer-third'>
        <span className='title'>Contact</span>
        <span>Email</span>
        <span>Phone</span>
        <span>Linkedin</span>
      </div>
      <div className='footer-fourth'>
        <span className='title'>Join our newsletter</span>
        <input type='text' placeholder='Your email adress' className='newsletter'></input>
      </div>
    </footer>
  );
};

export default Footer;
