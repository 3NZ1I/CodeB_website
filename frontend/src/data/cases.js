export const CASES = {
  p1: {
    id: 'p1',
    category: 'Retail',
    title: 'E‑Commerce Platform — Retail Scale',
    hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=70',
    overview: 'We partnered with a national retailer to re-architect their storefront for performance and operational resilience during peak traffic.',
    timeline: [
      { phase: 'Discovery', desc: 'Requirements, traffic analysis, and merchant workflows.' },
      { phase: 'Architecture', desc: 'Headless commerce, CDN, and tokenized payments.' },
      { phase: 'Delivery', desc: 'Staged rollout with A/B validations and monitoring.' },
    ],
    metrics: [
      { k: 'Uptime', v: '99.95%' },
      { k: 'Page Load', v: '40% faster' },
      { k: 'Conversion', v: '+12%' },
    ],
    tech: ['React', 'Node.js', 'GraphQL', 'Redis', 'CDN', 'Stripe'],
    testimonial: { quote: 'CodeB transformed our storefront. Sales and reliability improved within weeks.', author: 'Head of eCommerce, Retail Co.' },
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1556742102-8033105c6c2b?auto=format&fit=crop&w=1200&q=70'
    ]
  },
  p2: {
    id: 'p2',
    category: 'Analytics',
    title: 'Analytics Platform — Real-Time Insights',
    hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70',
    overview: 'Delivered a streaming analytics product enabling operational teams to act on events in near real-time across multiple tenants.',
    timeline: [
      { phase: 'Proof-of-Concept', desc: 'Streaming pipeline evaluation.' },
      { phase: 'Implementation', desc: 'Kinesis/Flink-like pipeline and multi-tenant schema.' },
      { phase: 'Operationalize', desc: 'Dashboards, alerts, and role-based access.' },
    ],
    metrics: [
      { k: 'Latency', v: '< 2s' },
      { k: 'Tenants', v: '200+' },
      { k: 'Alerts', v: 'Real-time' },
    ],
    tech: ['Kafka', 'Node.js', 'D3', 'ElasticSearch'],
    testimonial: { quote: 'We started reacting to incidents before users noticed them — incredible.', author: 'Platform Ops, AnalyticsCo' },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=70'
    ]
  },
  p3: {
    id: 'p3',
    category: 'Security',
    title: 'Network & Security — Zero Trust',
    hero: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1600&q=70',
    overview: 'Complete redesign of corporate-wide networking with automated security controls and audited configurations.',
    timeline: [
      { phase: 'Assessment', desc: 'Inventory, risk analysis and priorities.' },
      { phase: 'Design', desc: 'Zero-trust model and least-privilege policies.' },
      { phase: 'Implementation', desc: 'Automated configs, monitoring and on-site verification.' },
    ],
    metrics: [
      { k: 'Audit Score', v: 'A+' },
      { k: 'MTTR', v: '-48%' },
      { k: 'Incidents', v: 'Reduced by 70%' },
    ],
    tech: ['Fortinet', 'Zero-Trust', 'Terraform', 'Syslog', 'Splunk'],
    testimonial: { quote: 'Their approach was practical and predictable — exactly what we needed.', author: 'CISO, Finance Inc.' },
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=70'
    ]
  }
};
