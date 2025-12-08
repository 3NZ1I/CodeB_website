import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const items = [
  { id: 's1', title: 'Web Development', desc: 'Responsive, accessible and fast websites built with modern stacks.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=70' },
  { id: 's2', title: 'App Development', desc: 'Cross-platform apps with beautiful UX and robust backend integrations.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70' },
  { id: 's3', title: 'Cloud & Infrastructure', desc: 'Secure, scalable cloud architecture and managed operations.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70' },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services page-container">
      <header className="section-head">
        <h1 className="gradient-text">Our Services</h1>
        <p className="muted">Luxury-grade engineering and operational support — designed for teams that demand excellence.</p>
      </header>

      <div className="service-cards">
        {items.map((it) => (
          <article className="card glass" key={it.id}>
            <div className="card-media" style={{ backgroundImage: `url('${it.img}')` }} aria-hidden="true" />
            <div className="card-content">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <div className="card-actions">
                <button className="small-cta" onClick={() => navigate('/contact')}>Discuss</button>
                <button className="tertiary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>See Case Studies</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;