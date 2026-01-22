import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css';

const Career = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply');
  };

  const jobs = [
    {
      title: 'Game Developer',
      description: 'Develop cutting-edge games using Unity and Unreal Engine.',
      requirements: ['Experience in C# or C++', 'Knowledge of game engines', 'Passion for gaming']
    },
    {
      title: 'QA Tester',
      description: 'Ensure game quality through comprehensive testing.',
      requirements: ['Attention to detail', 'Experience in testing', 'Understanding of game mechanics']
    },
    {
      title: 'UI/UX Designer',
      description: 'Design intuitive interfaces for immersive gaming experiences.',
      requirements: ['Proficiency in design tools', 'Understanding of user experience', 'Creativity']
    }
  ];

  return (
    <section id="career" className="career">
      <div className="career-container">
        <div className="career-hero">
          <h1 className="career-title">Join Our Team</h1>
          <p className="career-intro">
            At Codeknight Esports, we're building the future of gaming. If you're passionate about creating immersive experiences, we want you on our team.
          </p>
        </div>
        
        <div className="career-benefits">
          <h2>Why Join Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Innovative Projects</h3>
              <p>Work on groundbreaking games and technologies.</p>
            </div>
            <div className="benefit-item">
              <h3>Collaborative Environment</h3>
              <p>Join a team of talented professionals in a supportive culture.</p>
            </div>
            <div className="benefit-item">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career advancement.</p>
            </div>
            <div className="benefit-item">
              <h3>Work-Life Balance</h3>
              <p>Flexible hours and remote work options.</p>
            </div>
          </div>
        </div>

        <div className="job-openings">
          <h2>Open Positions</h2>
          <div className="jobs-list">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <button className="apply-btn" onClick={handleApply}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="career-cta">
          <h2>Ready to Make an Impact?</h2>
          <p>Send your resume to careers@codeknightesports.in</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Career;
