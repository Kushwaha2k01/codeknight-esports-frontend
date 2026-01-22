import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './home.css';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViewPortfolio = () => {
    window.open('https://lush-spleen-0cd.notion.site/CODEKNIGHT-ESPORTS-PORTFOLIO-12de0fdcaf078086818efa2f7c1dec60', '_blank');
  };

  return (
    <section id="home" className="home">
      {!isMobile && <Spline className="spline-background" scene="https://prod.spline.design/5AncgiDFGQNKKdGz/scene.splinecode" />}
      {isMobile && <div className="static-background"></div>}
      <div className="home-content">
        <div className="home-title">
          <h1>Welcome to Codeknight Esports</h1>
          <h2>Where Imagination Becomes Interaction</h2>
        </div>
        <p>
          We're not just building games - we're shaping the future of gaming.<br />
          From pixel-perfect testing to immersive gameplay experiences,<br />
          CodeKnight is your end-to-end creative and technical powerhouse.
        </p>
        <button className="view-portfolio-btn" onClick={handleViewPortfolio}>View Portfolio</button>
      </div>
    </section>
  );
};

export default Home;
