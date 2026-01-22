import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes Codeknight Esports different from other services-based gaming studios?",
      answer: "Codeknight Esports, we don't just develop games; we shape the future of gaming. Unlike traditional studios, we provide end-to-end creative and technical solutions, from pixel-perfect testing to immersive gameplay experiences. Our unique blend of imagination and innovation ensures your project stands out in a crowded market."
    },
    {
      question: "What are the unique selling points (USPs) of Codeknight Esports?",
      answer: "Our USPs include comprehensive game development services, cutting-edge technology integration, dedicated quality assurance, and a passion for creating interactive worlds. We focus on turning your vision into reality with unparalleled attention to detail and user engagement."
    },
    {
      question: "Why should clients choose Codeknight Esports for their gaming needs?",
      answer: "Choose us for our proven track record in delivering high-quality, innovative gaming solutions. We prioritize client satisfaction, offer scalable services, and stay ahead of industry trends to ensure your game not only meets but exceeds expectations."
    }
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              <span className="faq-question-text">{faq.question}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
