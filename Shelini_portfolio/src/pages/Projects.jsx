import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mood-Based Food Ordering System",
      description: "An AI-powered food ordering system that recommends menu items based on customer mood and contextual factors like time of day.",
      technologies: ["HTML", "CSS" , "AI/ML", "Python","MySQL"],
      image: "🍔"
    },
    {
      id: 2,
      title: "Cupcake Factory Mobile App",
      description: "A mobile app for a bakery that allows users to view, order, and customize cupcakes for various occasions.",
      technologies: ["Android", "Java"],
      image: "🧁"
    },
    {
      id: 3,
      title: "Event Management SOC",
      description: "A system-on-chip based solution for managing events, ticketing, and integration with social media and entertainment platforms.",
      technologies: ["C#", ".net", "MySQL"],
      image: "🎵"
    },
    {
      id: 4,
      title: "Movie Theater Web Application",
      description: "A web platform for booking movie tickets, checking showtimes, and managing seating arrangements.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      image: "🎬"
    },
    {
      id: 5,
      title: "Student Marks Improvement System Web Application",
      description: "A system to help students track, analyze, and improve academic performance through data visualization and analytics.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      image: "📊"
    }
  ];

  return (
    <div className="page-container">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="projects-intro">Here are some of the projects I've worked on. Each one showcases different skills and technologies I've mastered.</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Link to={`/projects/${project.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
