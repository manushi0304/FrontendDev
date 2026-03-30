import React from 'react';
import './Services.css';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import Hero from './Hero';
import heroImage from '../Website/5101597.jpg';
import { Code2, Cpu, Cloud, Phone, Network, Shield, Smartphone, Globe, Terminal } from 'lucide-react';

const services = [
  { icon: <Code2 size={22}/>,     title: 'Custom Software Solutions', description: 'Tailor-made software designed with your specific business requirements in mind — scalable, maintainable, and built for the long term.' },
  { icon: <Cpu size={22}/>,       title: 'Embedded Systems',          description: 'Specializing in IoT, Avionics, Tactical Radios, C4ISR, Autonomous Vehicles, and Telematics — comprehensive embedded solutions for any environment.' },
  { icon: <Cloud size={22}/>,     title: 'Cloud Solutions',           description: 'Leveraging AWS to deliver scalable, robust cloud architectures that transform your business operations and reduce overhead.' },
  { icon: <Phone size={22}/>,     title: 'Telecom Solutions',         description: 'Solutions designed to enhance connectivity, streamline communication processes, and ensure mission-critical uptime.' },
  { icon: <Network size={22}/>,   title: 'Networking Solutions',      description: 'Advanced networking including DMVPN, command-post architecture, secure data transfer, and Software Defined Radio (SDR).' },
  { icon: <Shield size={22}/>,    title: 'Cybersecurity',             description: 'Product Security Assurance, STRIDE Analysis, PenTesting, TPM, TrustZone, and FIPS compliance — protecting your most critical digital assets.' },
  { icon: <Smartphone size={22}/>,title: 'Mobile Applications',       description: 'Intuitive, user-friendly mobile applications for iOS and Android platforms built to engage your users and scale with your business.' },
  { icon: <Globe size={22}/>,     title: 'Websites & Portals',        description: 'Dynamic websites and portals built with React, Angular, and modern JavaScript — performant, accessible, and conversion-focused.' },
  { icon: <Terminal size={22}/>,  title: 'Device Drivers',            description: 'Specialized driver development for Linux, Real-Time OS, FreeRTOS, and VxWorks — ensuring seamless hardware-software integration.' },
];

const Services = () => (
  <div className="services-page">
    <Navbar />
    <Hero image={heroImage} title="Services & Solutions" />
    <div className="page-content">
      <div className="page-intro">
        <p className="section-label">What We Offer</p>
        <h1 className="section-heading">End-to-End <em>Technology</em> Services</h1>
        <p className="about-text">
          At Softick LLC, we deliver a wide array of services and solutions designed to propel
          your business performance. From prototype to production — we take your product through
          the complete lifecycle.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-item" key={i}>
            <div className="service-item-icon">{s.icon}</div>
            <div className="service-item-body">
              <h3 className="service-item-title">{s.title}</h3>
              <p className="service-item-desc">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Bottombar />
  </div>
);

export default Services;