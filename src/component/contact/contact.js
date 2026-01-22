import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import linkedinGif from '../../assets/contact social media icon/linkedin.png';
import facebookGif from '../../assets/contact social media icon/facebook.png';
import instagramGif from '../../assets/contact social media icon/instagram.png';
import twitterGif from '../../assets/contact social media icon/twitter.png';
import youtubeGif from '../../assets/contact social media icon/youtube.png';
import discordGif from '../../assets/contact social media icon/discord.png';
import mailGif from '../../assets/contact social media icon/mail.png';
import locationGif from '../../assets/contact social media icon/location.png';
import whatsappGif from '../../assets/contact social media icon/whatsapp.png';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-wrapper">
          <div className="contact-card">
            <div className="icon-box">
              <img src={mailGif} alt="Mail" />
            </div>
            <div className="info-content">
              <p><a href="mailto:contact@codeknightesports.in">contact@codeknightesports.in</a></p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-box">
              <img src={locationGif} alt="Location" />
            </div>
            <div className="info-content">
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-box">
              <img src={whatsappGif} alt="WhatsApp" />
            </div>
            <div className="info-content">
              <p>+91-6386812091 (Whatsapp Only)</p>
            </div>
          </div>

          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://in.linkedin.com/company/codeknightesports" target="_blank" rel="noopener noreferrer">
                <img src={linkedinGif} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559502523556" target="_blank" rel="noopener noreferrer">
                <img src={facebookGif} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/codeknight_esports/" target="_blank" rel="noopener noreferrer">
                <img src={instagramGif} alt="Instagram" />
              </a>
              <a href="https://x.com/Codeknight_ep" target="_blank" rel="noopener noreferrer">
                <img src={twitterGif} alt="Twitter" />
              </a>
              <a href="https://youtube.com/@codeknight_esports?si=BECb2pnusrKTUJ8y" target="_blank" rel="noopener noreferrer">
                <img src={youtubeGif} alt="YouTube" />
              </a>
              <a href="https://discord.gg/nVFkaBEfhJ" target="_blank" rel="noopener noreferrer">
                <img src={discordGif} alt="Discord" />
              </a>
            </div>
          </div>

        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get in Touch</h3>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="btn-icon" />
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
