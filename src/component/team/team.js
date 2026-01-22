import React from 'react';
import './team.css';

// Assuming images are imported from assets; replace with actual paths if needed
import avinashImage from '../../assets/Team/Avinash Kushwaha.jpeg'; // Placeholder path
import zakiImage from '../../assets/Team/Mohammad Zaki.jpg'; // Placeholder path
import khushiImage from '../../assets/Team/Khushi Gupta.jpeg'; // Placeholder path

const teamMembers = [
  {
    name: "Avinash Kushwaha",
    position: "Founder & CEO, Director",
    linkedin: "https://www.linkedin.com/in/avinash-kushwaha-2k01/",
    image: avinashImage
  },
  {
    name: "Mohammad Zaki Kave",
    position: "Co-Founder, Director & Head of Business Partnership Manager",
    linkedin: "https://www.linkedin.com/in/mohammad-zaki-kave-1277041b1/",
    image: zakiImage
  },
  {
    name: "Khushi Gupta",
    position: "Co-Founder, Director & Head of Operation Manager",
    linkedin: "https://www.linkedin.com/in/khushi22/",
    image: khushiImage
  }
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-description">
          We're a team of gamers, developers, designers, and tech enthusiasts who live and breathe gaming.
          We believe in collaboration, fast execution, and building solutions that spark creativity and engagement.
        </p>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.image} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
