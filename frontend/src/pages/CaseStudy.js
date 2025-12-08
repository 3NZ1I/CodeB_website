import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASES } from '../data/cases';
import './CaseStudy.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, i) => (
            <div className="carousel-slide" key={i} style={{ backgroundImage: `url('${img}')` }} />
          ))}
        </div>
      </div>
      <button className="carousel-control prev" onClick={prev} aria-label="Previous image">‹</button>
      <button className="carousel-control next" onClick={next} aria-label="Next image">›</button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button 
            key={i} 
            className={`dot ${i === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { id } = useParams();
  const cs = CASES[id];

  if (!cs) {
    return (
      <div className="case-study page-container">
        <h1>Case study not found</h1>
        <p><Link to="/portfolio">Back to portfolio</Link></p>
      </div>
    );
  }

  return (
    <div className="case-study page-container">
      <header className="section-head">
        <div className="case-header-row">
          <h1 className="gradient-text">{cs.title}</h1>
          <button className="pdf-btn" onClick={() => window.print()} aria-label="Download Case Study PDF">
            Download PDF ↓
          </button>
        </div>
        <p className="muted">{cs.overview}</p>
      </header>

      <section className="case-hero glass">
        <div className="case-hero-media" style={{ backgroundImage: `url('${cs.hero}')` }} />
        <div className="case-hero-body">
          <h2>Project Overview</h2>
          <p>{cs.overview}</p>
          <h3>Key Outcomes</h3>
          <div className="metrics">
            {cs.metrics.map((m) => (
              <div className="metric" key={m.k}>
                <div className="metric-value">{m.v}</div>
                <div className="metric-key">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline">
        <h3>Project Timeline</h3>
        <div className="timeline-list">
          {cs.timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-phase">{t.phase}</div>
              <div className="timeline-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="tech">
        <h3>Tech & Tools</h3>
        <div className="tech-list">
          {cs.tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
        </div>
      </section>

      <section className="testimonial">
        <blockquote>“{cs.testimonial.quote}”</blockquote>
        <cite>— {cs.testimonial.author}</cite>
      </section>

      {cs.gallery && cs.gallery.length > 0 && (
        <section className="gallery">
          <h3>Gallery</h3>
          <Carousel images={cs.gallery} />
        </section>
      )}

      <section className="related-projects">
        <h3>Related Projects</h3>
        <div className="related-grid">
          {Object.values(CASES)
            .filter(c => c.id !== id)
            .slice(0, 2)
            .map(related => (
              <Link to={`/case-study/${related.id}`} key={related.id} className="related-card glass">
                <div className="related-media" style={{ backgroundImage: `url('${related.hero}')` }} />
                <div className="related-info">
                  <h4>{related.title}</h4>
                  <span className="related-cat">{related.category}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="case-contact glass">
        <div className="contact-content">
          <h3>Ready to build something similar?</h3>
          <p>Let's discuss how we can apply these same strategies to your project.</p>
        </div>
        <form className="inline-contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will be in touch shortly.'); }}>
          <input type="email" placeholder="Enter your email" required aria-label="Email address" />
          <button type="submit" className="cta-button sheen">Get in Touch</button>
        </form>
      </section>

      <footer style={{ marginTop: '1.4rem' }}>
        <Link to="/contact" className="small-cta">Talk to Us About This</Link>
      </footer>
    </div>
  );
};

export default CaseStudy;
