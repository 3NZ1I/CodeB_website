import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CASES } from '../data/cases';
import './Home.css';

const services = [
  { title: 'On-Demand Smart Hands', text: 'Remote or on-site technicians available when you need them.', img: 'https://images.unsplash.com/photo-1581091012184-7a6e2f0c4d67?auto=format&fit=crop&w=800&q=60' },
  { title: 'Hardware Repairs', text: 'Fast, reliable repairs for servers, workstations and network gear.', img: 'https://images.unsplash.com/photo-1587825140901-5c3b0b2b3b4f?auto=format&fit=crop&w=800&q=60' },
  { title: 'Network Provisioning', text: 'Setup, secure and monitor networks across multiple sites.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60' },
];

const steps = [
  { title: 'Request', desc: 'Open a ticket or call — we get to work.' },
  { title: 'Dispatch', desc: 'Remote troubleshooting or local technician dispatched.' },
  { title: 'Resolve', desc: 'Job completed, verified, and documented.' },
];

function Home() {
  const navigate = useNavigate();

  const goAssessment = (e) => {
    e.preventDefault();
    navigate('/contact');
  };
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-overlay">
          <div className="hero-decor" />
          <div className="hero-content fade-in">
            <h1>Welcome to CodeB — Bespoke Technology & Design</h1>
            <p className="hero-sub">We craft premium technology experiences — secure, elegant, and built to scale for discerning teams.</p>
            <p className="lead">Oversee multiple offices without dedicated IT — we provide technicians and remote support when and where you need it.</p>
            <div className="hero-ctas">
              <button className="cta-button sheen" onClick={() => navigate('/contact')}>Request Assessment</button>
              <a className="secondary-cta" href="/contact">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section fade-in">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card glass" key={i}>
              <img src={s.img} alt={s.title} />
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <button className="small-cta">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-work fade-in">
        <div className="section-header">
          <h2>Featured Work</h2>
          <Link to="/case-studies" className="view-all-link">View All Case Studies →</Link>
        </div>
        <div className="featured-grid">
          {Object.values(CASES).slice(0, 2).map(cs => (
            <Link to={`/case-study/${cs.id}`} key={cs.id} className="featured-card glass">
              <div className="featured-media" style={{ backgroundImage: `url('${cs.hero}')` }} />
              <div className="featured-content">
                <span className="featured-cat">{cs.category}</span>
                <h3>{cs.title}</h3>
                <p>{cs.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works fade-in">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((st, i) => (
            <div className="step" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3>{st.title}</h3>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>
      </section>


    
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