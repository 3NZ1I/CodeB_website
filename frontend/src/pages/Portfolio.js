import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <p>Take a look at some of our recent projects and success stories.</p>
      <div className="portfolio-grid">
        <div className="project">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=60" alt="Project 1" />
          <div className="project-info">
            <h2>E-Commerce Platform</h2>
            <p>A full-featured online store with secure payment integration.</p>
          </div>
        </div>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60" alt="Project 2" />
          <div className="project-info">
            <h2>Data Analytics Dashboard</h2>
            <p>Real-time data visualization for enterprise clients.</p>
          </div>
        </div>
        <div className="project">
          <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=60" alt="Project 3" />
          <div className="project-info">
            <h2>Secure Network Setup</h2>
            <p>Implementation of a secure corporate network infrastructure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;