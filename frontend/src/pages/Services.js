import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-cards">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60" alt="Web Development" />
          <div className="card-content">
            <h2>Web Development</h2>
            <p>We build responsive and modern websites using the latest frameworks.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=60" alt="App Development" />
          <div className="card-content">
            <h2>App Development</h2>
            <p>Custom mobile and desktop applications tailored to your needs.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60" alt="Cloud Solutions" />
          <div className="card-content">
            <h2>Cloud Solutions</h2>
            <p>Scalable and secure cloud services to power your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;