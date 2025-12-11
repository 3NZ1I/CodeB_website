import React from 'react';
import './Home.css';

const profile = {
  name: 'Bessar Farac (Bashar Faraj)',
  title: 'IT Support · System Administration · Networking · Azure Admin · Programming',
  summary:
    '14+ years keeping teams online across challenging environments. Identity-first security, reliable networks, calm support leadership for 300+ users — and building toward launching my own CodeB programming-focused company.',
  location: 'Turkey / Syria · Remote-friendly',
  contacts: [
    { label: 'Syrian phone number', value: '+963-954711706', whatsapp: true },
    { label: 'Turkish phone number', value: '+90-5362505397', whatsapp: true },
    { label: 'Email', value: 'Farajb74@Hotmail.com' },
    { label: 'LinkedIn', value: '/bashar-faraj' },
  ],
};

const stats = [
  { label: 'Experience', value: '14+ yrs' },
  { label: 'Users supported', value: '300+' },
  { label: 'Regions', value: 'Turkey / Syria / Remote' },
  { label: 'Focus', value: 'Cloud · Identity · Networks' },
];

const experience = [
  {
    period: '2025',
    title: 'IT Consultant',
    bullets: [
      'Developed a referral system and data collection tool for a nonprofit pilot.',
      'Implemented automation workflows and built suited databases to align with EU GDPR.',
    ],
  },
  {
    period: '2022 — 2025',
    title: 'IT Officer (acting IT Manager)',
    bullets: [
      'Identity security uplift with Azure/Entra and MFA for ~300 staff.',
      'Reliable networks, comms, printers, CCTV; firmware and lifecycle upkeep.',
      'Intune enrollment, hardware diagnostics, and endpoint hardening.',
      'Emergency continuity with Starlink/Thuraya; led IT during earthquake response.',
      'Onboarded/trained 100+ staff, cutting ServiceNow ticket load.',
    ],
  },
  {
    period: '2020 — 2022',
    title: 'Partnership IT Officer',
    bullets: [
      'Supported 200 staff across 5 partners; standardized procurement (-25% cycle time).',
      'AD (Azure, G Suite) admin, licensing, and printing services (on-prem/cloud).',
      'Team lead: prioritization, performance tracking, training culture.',
      'Network and CCTV builds; firewall/AV deployments (FortiGate, Meraki, Bitdefender).',
    ],
  },
  {
    period: '2016 — 2020',
    title: 'IT Assistant',
    bullets: [
      'Customer-first IT support; improved satisfaction and reduced downtime.',
      'Patch management and network upkeep for SME environments.',
      'Introduced CCTV and firewall solutions to strengthen security.',
    ],
  },
  {
    period: '2008 — 2016',
    title: 'IT Intern / Junior Technician',
    bullets: [
      'PC/mobile support, OS installs, antivirus, and hardware maintenance.',
      'Assisted Windows Server deployments and network builds.',
    ],
  },
];

const skills = {
  core: [
    'Azure / Entra administration',
    'Identity & MFA hardening',
    'Networking (VPN, SD-WAN, firewalls)',
    'Systems administration (Windows / AD / G Suite)',
    'Endpoint management (Intune)',
    'Service leadership and training',
  ],
  security: [
    'Access control & policy baselines',
    'Firewall tuning and logging',
    'CCTV and physical security integrations',
    'Patch hygiene and firmware lifecycle',
  ],
  tools: [
    'ServiceNow / Jira',
    'FortiGate / Meraki / Bitdefender',
    'Starlink / Thuraya for continuity',
  ],
  languages: ['Arabic (Native)', 'English (Fluent)', 'Turkish (Fluent)'],
  programming: [
    'JavaScript',
    'TypeScript',
    'C# (Intermediate)',
    'Python (Intermediate)',
    'PowerShell',
    'Bash',
    'Dart (Beginner)',
  ],
};

const education = [
  { period: '2010 — 2013', title: 'Technical Diploma, Software Engineering (Computer Networks)', place: 'Aleppo Computer Technology Institute (ACTI)' },
  { period: '2008 — 2010', title: 'High School, Computer Networks', place: 'Aleppo Technic High School' },
];

const certifications = [
  'Google IT Support Professional Certificate',
  'Google Workspace Administration Specialization',
  'Foundations of Project Management',
  'Foundations: Data, Data, Everywhere',
  'Starlink in Disaster and Humanitarian Response',
  'MS AZ-900 Azure Fundamentals (training)',
  'MS AZ-104 Azure Administrator Associate (training)',
  'CCNA (training)',
  'CCNP (training)',
  'Flutter & Dart (training)',
  'MS AI-102 Azure AI Engineer (training)',
];

const projects = [
  {
    id: 'p1',
    title: 'Secure Connectivity Program',
    desc: 'Resilient network, comms, and CCTV for 300+ users with emergency links.',
    detail: 'Identity hardening with Azure/Entra, MFA rollout, firewall tuning, and firmware lifecycle.',
  },
  {
    id: 'p2',
    title: 'Service Desk Efficiency Uplift',
    desc: 'Onboarding and training for 100+ staff to cut ticket volume and boost digital literacy.',
    detail: 'SOPs, knowledge sessions, and proactive endpoint posture improvements.',
  },
  {
    id: 'p3',
    title: 'Partner IT Modernization',
    desc: 'Supported five partners (200 staff) with AD, licensing, printing, and procurement standards.',
    detail: 'Reduced procurement cycle by 25% and enforced baseline security (firewalls/AV).',
  },
  {
    id: 'p4',
    title: 'CodeB Suite (Admin · Reach · Remote)',
    desc: 'Productized admin platform, e-commerce reach, and secure remote desktop for managed clients.',
    detail: 'React frontends with Node/.NET services; identity-aware access, ticketing, and observability baked in.',
  },
  {
    id: 'p5',
    title: 'Referral System',
    desc: 'Lightweight referral pipeline to track advocates, rewards, and lead conversion.',
    detail: 'Built with React/Node, role-based views, audit trails, and analytics-ready event logging.',
  },
];

const projectLanguages = [
  'JavaScript & TypeScript (React frontends)',
  'Node.js (API & services)',
  'C# / .NET (service components)',
  'Python (automation & integration)',
  'SQL (PostgreSQL / SQL Server)',
  'MongoDB (document data)',
  'PowerShell / Bash (devops scripts)',
  'Dart (Flutter experiments)',
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Infrastructure · Cloud · Security · Full Stack Development</p>
          <h1>{profile.name}</h1>
          <p className="hero-sub">{profile.title}</p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-contacts">
            {profile.contacts.map((c) => (
              <div className="contact-chip" key={c.label}>
                <span className="chip-label">{c.label}</span>
                <span className="chip-value">
                  {c.whatsapp ? (
                    <a
                      className="wa-link"
                      href={`https://wa.me/${c.value.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open WhatsApp chat for ${c.value}`}
                    >
                      <img
                        src="/icons8-whatsapp-48.png"
                        alt="WhatsApp"
                        className="wa-img"
                        loading="lazy"
                      />
                      <span>{c.value}</span>
                    </a>
                  ) : (
                    c.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((exp) => (
            <article className="timeline-card" key={exp.period}>
              <div className="timeline-meta">
                <span className="pill">{exp.period}</span>
                <h3>{exp.title}</h3>
              </div>
              <ul>
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Skills</h2>
          <p className="muted">Identity-first, reliable networks, supportive leadership.</p>
        </div>
        <div className="skill-columns">
          <SkillGroup title="Core" items={skills.core} />
          <SkillGroup title="Security" items={skills.security} />
          <SkillGroup title="Tools" items={skills.tools} />
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="Programming" items={skills.programming} />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p className="muted">CodeB products plus representative outcomes and impact.</p>
        </div>
        <div className="card-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="muted small">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Project Languages</h2>
          <p className="muted">Stacks used across CodeB products and the referral system.</p>
        </div>
        <div className="chip-cloud">
          {projectLanguages.map((lang) => (
            <span className="chip" key={lang}>{lang}</span>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <div>
          <div className="section-head">
            <h2>Education</h2>
          </div>
          <div className="card-list">
            {education.map((e) => (
              <div className="info-card" key={e.title}>
                <span className="pill">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="muted">{e.place}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-head">
            <h2>Certificates & Training</h2>
          </div>
          <div className="chip-cloud">
            {certifications.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <h2>Contact</h2>
          <p className="muted">Open to infrastructure, security, and cloud leadership work.</p>
          <div className="contact-actions">
            <a className="button" href="mailto:Farajb74@Hotmail.com">Email</a>
            <a className="button ghost" href="tel:+963954711706">Call SY</a>
            <a className="button ghost" href="tel:+905362505397">Call TR</a>
            <a className="button ghost" href="https://linkedin.com/in/bashar-faraj" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
