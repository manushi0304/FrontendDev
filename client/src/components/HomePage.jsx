import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Settings2, Handshake, BarChart3,
  Shield, Cpu, Cloud, Smartphone, Network, Bot
} from 'lucide-react';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import './HomePage.css';

const stats = [
  { number: '28+', label: 'Enterprise Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '9',   label: 'Service Domains' },
];

const pillars = [
  { icon: <Users size={20}/>,     title: 'Our People',                  sub: 'Talent-first culture with domain experts.' },
  { icon: <Settings2 size={20}/>, title: 'Performance-Based Processes', sub: 'Measurable, outcome-driven delivery.' },
  { icon: <Handshake size={20}/>, title: 'Integrated Solutions Teams',  sub: 'Cross-functional expertise on every project.' },
  { icon: <BarChart3 size={20}/>, title: 'Strategic Tech & Business',   sub: 'Bridging technical vision and business execution.' },
];

const services = [
  { icon: <Shield size={22}/>,     title: 'Cybersecurity',    desc: 'TPM, TrustZone, NSA-grade security, FIPS compliance, and product security assurance.', featured: true, wide: true },
  { icon: <Cpu size={22}/>,        title: 'Embedded Systems', desc: 'IoT, Avionics, Tactical Radios, C4ISR, Autonomous Vehicles, and Telematics.' },
  { icon: <Cloud size={22}/>,      title: 'Cloud Solutions',  desc: 'Scalable AWS-powered architectures that transform your operations.' },
  { icon: <Smartphone size={22}/>, title: 'Software & Mobile',desc: 'Custom software, iOS & Android apps, portals in React and Angular.' },
  ];

const HomePage = () => (
  <>
    <Navbar />

    {/* ── HERO ── */}
    <section className="home-hero">
      <div className="home-hero-bg" />
      <div className="home-hero-grid" />
      <div className="home-hero-content">
        <div className="home-hero-tag">Minority Owned Small Business</div>
        <h1 className="home-hero-heading">
          Engineering Solutions<br />For A <em>Connected</em> World
        </h1>
        <p className="home-hero-sub">
          Softick LLC delivers strategic technology consulting and managed services
          to commercial and government organizations — from prototype to production,
          cost-effectively and on time.
        </p>
        <div className="home-hero-actions">
          <Link to="/services" className="btn-primary">Explore Services →</Link>
          <Link to="/contact"  className="btn-outline">Get In Touch</Link>
        </div>
      </div>
    </section>

    {/* ── STATS ── */}
    <div className="home-stats">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>

    {/* ── BENTO ── */}
    <div className="home-bento">

      {/* ABOUT */}
      <div className="bento-section-header">
        <span className="section-label">About Us</span>
        <h2 className="section-heading">Who We <em>Are</em></h2>
      </div>

      <div className="bento-grid-about">
        {/* Main about card */}
        <div className="bento-card bento-about-main">
          <span className="bento-label">Softick LLC</span>
          <h2>Where Technology<br />Meets <em>Strategy</em></h2>
          <p>
            Softick LLC provides strategic consulting technology services and managed
            services to commercial, not-for-profit, and government organizations.
            As a Minority Owned Small Business, we are committed to excellence and
            creating innovative, flexible solutions for our state and federal clients.
          </p>
          <Link to="/capability" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
            View Capability Statement →
          </Link>
        </div>

        {/* 4 pillar cards */}
        {pillars.map((p, i) => (
          <div className="bento-card bento-pillar" key={i}>
            <div className="bento-pillar-icon">{p.icon}</div>
            <div className="bento-pillar-title">{p.title}</div>
            <div className="bento-pillar-sub">{p.sub}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="bento-section-header">
        <span className="section-label">What We Do</span>
        <h2 className="section-heading">Our <em>Services</em></h2>
      </div>

      <div className="bento-grid-services">
        {services.map((s, i) => (
          <div
            key={i}
            className={`bento-card bento-service ${s.featured ? 'bento-service-featured' : ''} ${s.wide ? 'wide' : ''}`}
          >
            <div className="bento-service-icon">{s.icon}</div>
            <div className="bento-service-title">{s.title}</div>
            <div className="bento-service-desc">{s.desc}</div>
          </div>
        ))}

        {/* See all card */}
        <Link to="/services" className="bento-card bento-see-all-card">
          See all services →
        </Link>
      </div>

    </div>

    {/* ── CTA ── */}
    <section className="home-cta">
      <span className="section-label">Ready to Start?</span>
      <h2 className="section-heading">Let's Build Something <em>Exceptional</em></h2>
      <p className="about-text">
        Whether you need strategic consulting, embedded systems, or cloud solutions —
        we're ready to partner with you.
      </p>
      <div className="home-cta-actions">
        <Link to="/contact"    className="btn-primary">Contact Us Today →</Link>
        <Link to="/capability" className="btn-outline">View Capability Statement</Link>
      </div>
    </section>

    <Bottombar />
  </>
);

export default HomePage;