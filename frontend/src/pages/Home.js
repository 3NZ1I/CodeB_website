import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

// --- DATA ---

const services = [
  { id: 's1', title: 'Web Development', desc: 'Responsive, accessible and fast websites built with modern stacks.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=70' },
  { id: 's2', title: 'App Development', desc: 'Cross-platform apps with beautiful UX and robust backend integrations.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70' },
  { id: 's3', title: 'Cloud & Infrastructure', desc: 'Secure, scalable cloud architecture and managed operations.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70' },
];

const projects = [
  { id: 'p1', title: 'E-Commerce Platform', desc: 'A full-featured online store with secure payment integration and seamless admin UX.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=70', details: 'Built for high-traffic retail, includes headless CMS and custom inventory sync.' },
  { id: 'p2', title: 'Data Analytics Dashboard', desc: 'Real-time visualizations and role-based views for enterprise customers.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70', details: 'Stream processing, alerting, and multi-tenant reporting.' },
  { id: 'p3', title: 'Secure Network Setup', desc: 'Corporate network with zero-trust principles and audited configurations.', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1400&q=70', details: 'End-to-end encryption, monitoring, and physical asset tagging.' },
];

const team = [
  { name: 'Bessar Farac', role: 'ICT Expert & Full Stack Developer', img: '/personal.webp' },
  { name: 'Mohammak Kakuk', role: 'Data Expert & Backend Senior Developer', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Majd Hamed', role: 'UI Expert, Senior Design & Strategic Engineer', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80' },
];

function Home() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [contactStatus, setContactStatus] = useState(null);
  
  // Modal refs
  const modalPanelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveElement = useRef(null);

  // Modal Focus Trap
  useEffect(() => {
    if (activeProject) {
      lastActiveElement.current = document.activeElement;
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);
      const handleKey = (e) => {
        if (e.key === 'Escape') setActiveProject(null);
      };
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    } else {
      setTimeout(() => lastActiveElement.current && lastActiveElement.current.focus(), 0);
    }
  }, [activeProject]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // Simulate submission
    setContactStatus('Sending...');
    setTimeout(() => {
      setContactStatus('Message sent — thank you!');
      form.reset();
    }, 1500);
  };

  const goAssessment = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  // Products data
  const products = [
    {
      name: 'CodeB Reach',
      desc: 'E-Commerce Admin Panel & Store.',
      icon: null
    },
    {
      name: 'CodeB Remote',
      desc: 'Secure Cross-Platform Remote Desktop Application.',
      icon: '/CodeB Remote.ico'
    },
    {
      name: 'CodeB Admin',
      desc: 'Service management and IT support ticketing platform.',
      icon: null
    }
  ];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-overlay">
          <div className="hero-decor" />
          <div className="hero-content fade-in">
            <h1>Welcome to CodeB — Bespoke Technology & Design</h1>
            <p className="hero-sub">We craft premium technology experiences — secure, elegant, and built to scale.</p>
            <p className="lead">From custom software to managed infrastructure, we provide the expertise you need to grow.</p>
            <div className="hero-ctas">
              <button className="cta-button sheen" onClick={goAssessment}>Request Assessment</button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products-section fade-in">
        <div className="section-head">
          <h2 className="gradient-text">Our Products</h2>
        </div>
        <div className="products-grid">
          {products.map((prod, i) => (
            <div className="product-card glass" key={prod.name}>
              {prod.icon && (
                <img src={prod.icon} alt={prod.name + ' icon'} className="product-icon" />
              )}
              <h3>{prod.name}</h3>
              <p>{prod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section fade-in">
        <div className="section-head">
          <h2 className="gradient-text">Our Services</h2>
          <p className="muted">Luxury-grade engineering and operational support.</p>
        </div>
        <div className="service-cards">
          {services.map((it) => (
            <article className="card glass" key={it.id}>
              <div className="card-media" style={{ backgroundImage: `url('${it.img}')` }} aria-hidden="true" />
              <div className="card-content">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <div className="card-actions">
                  <button className="small-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Discuss</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section fade-in">
        <div className="section-head">
          <h2 className="gradient-text">Featured Work</h2>
          <p className="muted">Selected projects crafted with attention to detail.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div className="project glass" key={p.id}>
              <div className="project-media" style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <div className="project-actions">
                  <button className="small-cta" onClick={() => setActiveProject(p)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="team-section fade-in">
        <div className="section-head">
          <h2 className="gradient-text">Meet The Team</h2>
          <p className="muted">The experts behind your success.</p>
        </div>
        <div className="team-members">
          {team.map((m, i) => (
            <div className="member" key={i}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section fade-in">
        <div className="contact-container">
          <div className="section-head">
            <h2 className="gradient-text">Contact Us</h2>
            <p className="muted">Ready to start your project? Let's talk.</p>
          </div>
          
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="How can we help you?" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {contactStatus && <p className="status">{contactStatus}</p>}

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509364!2d-122.4194154846813!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfd8b1b1%3A0x8c2e9e7b1b1b1b1b!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1633036800000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal-panel"
            ref={modalPanelRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close"
              ref={closeBtnRef}
            >✕</button>
            <div className="modal-media" style={{ backgroundImage: `url('${activeProject.img}')` }} />
            <div className="modal-body">
              <h2>{activeProject.title}</h2>
              <p className="muted">{activeProject.details}</p>
              <p>Interested in a case like this? <button className="small-cta" onClick={() => { setActiveProject(null); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Let's Talk</button></p>
            </div>
          </div>
        </div>
      )}

      {/* Sticky assessment CTA */}
      <button className="sticky-assessment" onClick={goAssessment} aria-label="Request free assessment">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Request Free Assessment
      </button>
    </div>
  );
}

export default Home;
