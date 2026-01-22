import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.png.png';
import discordIcon from '../../assets/contact social media icon/discord.png';
import facebookIcon from '../../assets/contact social media icon/facebook.png';
import instagramIcon from '../../assets/contact social media icon/instagram.png';
import linkedinIcon from '../../assets/contact social media icon/linkedin.png';
import twitterIcon from '../../assets/contact social media icon/twitter.png';
import youtubeIcon from '../../assets/contact social media icon/youtube.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="CodeKnight Esports Logo" className="footer-logo" />
          <p>Empowering gamers and esports enthusiasts with top-tier services and experiences.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Tournament Management</li>
            <li><Link to="/game-testing-prices">Game Testing Price</Link></li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: contact@codeknightesports.in</p>
          <p>Phone: +91-6386812091 (WhatsApp Only)</p>
          <p>Location: Bengaluru, Karnataka, India</p>
          <p>Time: 10:00 AM - 7:00 PM</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="follow-us">
            <div className="social-icons">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} alt="Discord" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2025 CodeKnight Esports. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-links">
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
