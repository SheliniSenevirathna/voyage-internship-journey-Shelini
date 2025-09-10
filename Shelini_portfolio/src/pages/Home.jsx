import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Shelini Senevirathna</span></h1>
          <h2>Frontend Developer & UI Designer</h2>
          <p>I create beautiful, functional websites and applications with a focus on user experience.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Building responsive and interactive websites using modern technologies.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and visually appealing user interfaces and experiences.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Ensuring websites work perfectly on all devices and screen sizes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;