import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Pages.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Sample project data - in a real app, you'd fetch this from an API
  const projects = {
    1: {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      fullDescription: "This e-commerce website was built with a focus on user experience and performance. It includes features like product search and filtering, user reviews, wishlist functionality, and a secure checkout process integrated with Stripe payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "🛒",
      liveUrl: "#",
      githubUrl: "#"
    },
    2: {
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      fullDescription: "This task management application allows users to create boards, lists, and cards to organize their work. It features drag-and-drop functionality, user authentication, and real-time updates using Firebase. The clean UI makes it easy to manage complex projects.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      image: "✅",
      liveUrl: "#",
      githubUrl: "#"
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="page-container">
        <div className="not-found-container">
          <div className="not-found-content">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="project-detail-container">
        <Link to="/projects" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Projects
        </Link>
        
        <div className="project-detail">
          <div className="project-detail-header">
            <div className="project-emoji-large">{project.image}</div>
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
          </div>
          
          <div className="project-detail-content">
            <div className="project-detail-text">
              <h2>About This Project</h2>
              <p>{project.fullDescription}</p>
              
              <h2>Technologies Used</h2>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag large">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> View Code
                </a>
              </div>
            </div>
            
            <div className="project-detail-image">
              <div className="image-placeholder large">
                <i className="fas fa-image"></i>
                <p>Project screenshot would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;