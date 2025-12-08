import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Learn more about Bessar.Work and our mission to deliver top-notch web solutions.</p>
      </section>
      <section className="timeline">
        <h2>Our Journey</h2>
        <ul>
          <li><strong>2020:</strong> Founded with a vision to innovate.</li>
          <li><strong>2022:</strong> Expanded to serve global clients.</li>
          <li><strong>2025:</strong> Recognized as a leader in tech solutions.</li>
        </ul>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>CTO & Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;