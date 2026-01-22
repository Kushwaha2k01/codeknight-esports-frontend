import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    language: '',
    experience: '',
    resume: null,
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('language', formData.language);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('portfolio', formData.portfolio);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          language: '',
          experience: '',
          resume: null,
          portfolio: ''
        });
        setTimeout(() => navigate('/career'), 2000);
      } else {
        setSubmitMessage(data.message || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate('/career');
  };

  return (
    <section className="application-form">
      <div className="form-container">
        <div className="form-header">
          <h1>Apply for Position</h1>
          <p>Join our team at Codeknight Esports</p>
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="City, Country"
              />
            </div>

            <div className="form-group">
              <label htmlFor="language">Languages</label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="e.g., English, Hindi, Spanish"
              />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio">Portfolio URL</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="experience">Experience & Skills *</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe your relevant experience, skills, and why you're interested in this position..."
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="resume">Resume/CV *</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
            <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
          </div>

          <div className="form-actions">
            <button type="button" className="back-btn" onClick={handleBack}>
              Back to Careers
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
