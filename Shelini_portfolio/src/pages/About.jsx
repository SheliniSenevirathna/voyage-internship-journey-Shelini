import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Shelini Senevirathna, a frontend developer specializing in React applications.
              I enjoy creating smooth user interfaces, responsive designs, and multi-page experiences.
            </p>
            <p>
              My skills include React, React Router, JavaScript, HTML, CSS, and modern frontend practices.
            </p>
            
            <h2>My Skills</h2>
            <div className="skills-list">
              <div className="skill-item">React.js</div>
              <div className="skill-item">JavaScript (ES6+)</div>
              <div className="skill-item">HTML5 & CSS3</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Git & GitHub</div>
              <div className="skill-item">Responsive Design</div>
              <div className="skill-item">UI/UX Design</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">C#</div>
              <div className="skill-item">Java</div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder large">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;