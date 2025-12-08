import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to CodeB</h1>
            <p>Empowering your business with cutting-edge technology, networking, and coding solutions.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60" alt="Coding" />
          <h3>Expert Coding</h3>
          <p>Clean, efficient, and scalable code for your applications.</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=500&q=60" alt="Networking" />
          <h3>Robust Networking</h3>
          <p>Secure and reliable network infrastructure solutions.</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60" alt="Technology" />
          <h3>Advanced Tech</h3>
          <p>Leveraging the latest technologies to stay ahead.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;