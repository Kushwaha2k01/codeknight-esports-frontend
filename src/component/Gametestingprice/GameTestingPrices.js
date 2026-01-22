import React from 'react';
import './GameTestingPrices.css';

const GameTestingPrices = () => {
  const testingTypes = [
    { type: 'Alpha Testing', price: '$50/hour' },
    { type: 'Beta Testing', price: '$40/hour' },
    { type: 'Manual Testing', price: '$30/hour' },
    { type: 'Automation Testing', price: '$60/hour' }
  ];

  const gameTypes = [
    'Mobile Games',
    'PC Games',
    'Console Games',
    'VR Games',
    'Web Games'
  ];

  return (
    <div className="game-testing-prices">
      <h1>Game Testing Prices</h1>
      <p>Professional game testing services with competitive hourly rates for all game types.</p>
      <div className="prices-container">
        {testingTypes.map((test, index) => (
          <div key={index} className="price-card">
            <h3>{test.type}</h3>
            <p className="price">{test.price}</p>
            <ul>
              {gameTypes.map((game, idx) => (
                <li key={idx}>{game}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameTestingPrices;
