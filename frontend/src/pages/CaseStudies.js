import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASES } from '../data/cases';
import './CaseStudies.css';

const CaseStudies = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(Object.values(CASES).map(c => c.category))];

  const filteredCases = filter === 'All' 
    ? Object.values(CASES) 
    : Object.values(CASES).filter(c => c.category === filter);

  return (
    <div className="case-studies page-container">
      <header className="section-head">
        <h1 className="gradient-text">Case Studies</h1>
        <p className="muted">Deep dives into our most challenging and rewarding projects.</p>
      </header>

      <div className="filter-bar">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="studies-grid" key={filter}>
        {filteredCases.map(cs => (
          <Link to={`/case-study/${cs.id}`} key={cs.id} className="study-card glass">
            <div className="study-media" style={{ backgroundImage: `url('${cs.hero}')` }} />
            <div className="study-content">
              <div className="study-cat">{cs.category}</div>
              <h3>{cs.title}</h3>
              <p className="muted">{cs.overview}</p>
              <div className="study-meta">
                {cs.metrics.slice(0, 2).map(m => (
                  <div key={m.k} className="mini-metric">
                    <strong>{m.v}</strong> {m.k}
                  </div>
                ))}
              </div>
              <span className="read-more">Read Case Study →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
