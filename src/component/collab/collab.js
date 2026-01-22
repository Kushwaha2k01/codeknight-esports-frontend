import React from 'react';
import './collab.css';

// Import collaboration images from assets
import digitran from '../../assets/Collab/Digitran Solutions.png';
import namor from '../../assets/Collab/Namor Global 1.jfif';
import redtaiger from '../../assets/Collab/Red Taiger Production.png';
import alphanova from '../../assets/Collab/Alpha Nova.jfif';

const collabData = [
  {
    id: 1,
    name: 'Digitran Solutions',
    image: digitran,
    link: 'https://digitransolutions.in/'
  },
  {
    id: 2,
    name: 'Namor Global',
    image: namor,
    link: 'https://www.linkedin.com/company/namor-global/'
  },
  {
    id: 3,
    name: 'Red Taiger Production',
    image: redtaiger,
    link: 'https://www.redtaigerproductions.com/'
  },
  {
    id: 4,
    name: 'Alpha Nova',
    image: alphanova,
    link: 'https://alphanovastudio.com/'
  }
];

const Collab = () => {
  return (
    <section id="collab" className="collab-section">
      <div className="collab-container">
        <h2 className="collab-title">Our Collaborations</h2>
        <div className="collab-grid">
          {collabData.map((collab) => (
            <div key={collab.id} className="collab-card">
              <a href={collab.link} target="_blank" rel="noopener noreferrer">
                <img src={collab.image} alt={collab.name} className="collab-image" />
              </a>
              <h3 className="collab-name">{collab.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;
