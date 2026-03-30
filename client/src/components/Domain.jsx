import React from 'react';
import './Domain.css';
import './Services.css';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import Hero from './Hero';
import heroImage from '../Website/5101597.jpg';
import { Wifi, Lock, Plane, Radio, Satellite, Stethoscope, Bot, CloudCog } from 'lucide-react';

const domains = [
  {
    icon: <Wifi size={22} />,
    title: 'IoT',
    description: 'End-to-end IoT solutions including Secure Boot, Device Provisioning, Security Certificate Management, and Secure Data Transfer to Cloud.',
  },
  {
    icon: <Lock size={22} />,
    title: 'CyberSecurity',
    description: 'TPM, Security Key Management, TrustZone, NSA-grade security, and FIPS compliance for mission-critical systems.',
  },
  {
    icon: <Plane size={22} />,
    title: 'Aviation',
    description: 'Innovative avionics and aviation solutions — helping the industry reach new altitudes with reliability and safety.',
  },
  {
    icon: <Radio size={22} />,
    title: 'Tactical Communication',
    description: 'Tactical communication solutions designed to enhance field operations and ensure seamless communication in any environment.',
  },
  {
    icon: <Satellite size={22} />,
    title: 'C4ISR',
    description: 'Advanced Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance solutions.',
  },
  {
    icon: <Stethoscope size={22} />,
    title: 'Medical',
    description: 'Medical solutions including Endoscopy systems and FDA-compliant device development — safe, precise, and certified.',
  },
  {
    icon: <Bot size={22} />,
    title: 'Robotics',
    description: 'Cutting-edge robotics design and development — autonomous systems that revolutionize industrial and research operations.',
  },
  {
    icon: <CloudCog size={22} />,
    title: 'AWS Cloud',
    description: 'Powerful AWS-based cloud solutions — scalable infrastructure, AI/ML pipelines, and managed services for your business.',
  },
];

const Domain = () => {
  return (
    <div className="domain-page">
      <Navbar />
      <Hero image={heroImage} title="Technology Domains" />

      <div className="page-content">
        <div className="page-intro">
          <p className="section-label">Expertise Areas</p>
          <h1 className="section-heading">
            Where Our <em>Expertise</em> Lives
          </h1>
          <p className="about-text">
            Softick LLC operates across a broad spectrum of technology domains, leveraging
            talented people, performance-based processes, and a strategic mix of technology
            and business knowledge.
          </p>
        </div>

        <div className="domains-grid">
          {domains.map((d, i) => (
            <div className="domain-card" key={i}>
              <div className="domain-card-icon">{d.icon}</div>
              <h3 className="domain-card-title">{d.title}</h3>
              <p className="domain-card-desc">{d.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Domain;