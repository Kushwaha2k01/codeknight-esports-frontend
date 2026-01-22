import React from 'react';
import './shiptap.css';
import shiptapLogo from '../../assets/shiptap logo.png';

const Shiptap = () => {
  const handleButtonClick = () => {
    window.open('https://www.shiptap.in', '_blank');
  };

  return (
    <section id="shiptap" className="shiptap">
      <div className="shiptap-container">
        <div className="shiptap-content">
          <img src={shiptapLogo} alt="ShipTap Logo" className="shiptap-logo" />
        </div>
        <div className="shiptap-button-container">
          <button className="join-wishlist-btn" onClick={handleButtonClick}>
            Join Wishlist Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shiptap;
