import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  { id: 'p1', title: 'E-Commerce Platform', desc: 'A full-featured online store with secure payment integration and seamless admin UX.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=70', details: 'Built for high-traffic retail, includes headless CMS and custom inventory sync.' },
  { id: 'p2', title: 'Data Analytics Dashboard', desc: 'Real-time visualizations and role-based views for enterprise customers.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70', details: 'Stream processing, alerting, and multi-tenant reporting.' },
  { id: 'p3', title: 'Secure Network Setup', desc: 'Corporate network with zero-trust principles and audited configurations.', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1400&q=70', details: 'End-to-end encryption, monitoring, and physical asset tagging.' },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);
  const modalPanelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveElement = useRef(null);

  // Manage focus when modal opens/closes and trap Tab inside modal
  useEffect(() => {
    if (active) {
      // save last focused element
      lastActiveElement.current = document.activeElement;
      // give focus to close button
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);

      const handleKey = (e) => {
        if (e.key === 'Escape') { setActive(null); }
        if (e.key === 'Tab') {
          // trap focus within modal
          const focusable = modalPanelRef.current.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
          } else {
            if (document.activeElement === last) { e.preventDefault(); first.focus(); }
          }
        }
      };

      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    } else {
      // restore focus
      setTimeout(() => lastActiveElement.current && lastActiveElement.current.focus(), 0);
    }
  }, [active]);

  return (
    <div className="portfolio page-container">
      <header className="section-head">
        <h1 className="gradient-text">Our Portfolio</h1>
        <p className="muted">Selected work — crafted with attention to detail and long-term maintainability.</p>
      </header>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <div className="project glass" key={p.id}>
            <div className="project-media" style={{ backgroundImage: `url('${p.img}')` }} />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="project-actions">
                <button className="small-cta" onClick={() => setActive(p)}>View</button>
                <button className="tertiary" onClick={() => window.location.href = '/contact'}>Get Similar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="modal-panel"
            ref={modalPanelRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
              ref={closeBtnRef}
            >✕</button>
            <div className="modal-media" style={{ backgroundImage: `url('${active.img}')` }} />
            <div className="modal-body">
              <h2>{active.title}</h2>
              <p className="muted">{active.details}</p>
              <p>Interested in a case like this? <button className="small-cta" onClick={() => window.location.href = '/contact'}>Let's Talk</button></p>
              <div style={{ marginTop: '0.8rem' }}>
                <button className="tertiary" onClick={() => navigate(`/case-study/${active.id}`)}>Read Case Study</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;