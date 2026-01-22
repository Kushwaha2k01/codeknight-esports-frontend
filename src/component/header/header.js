import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`header-middle ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a></li>
          <li><Link to="/career" onClick={() => setIsMenuOpen(false)}>Career</Link></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
