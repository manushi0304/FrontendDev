import React from 'react';
import './Clients.css';
import './Services.css';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import Hero from './Hero';
import heroImage from '../Website/5101597.jpg';
import { Trophy } from 'lucide-react';

// Exact filenames from /src/clients/ folder
const logoMap = {
  'Maryland Central Collection Unit (CCU)': 'MarylandCentralCollectionUnit(CCU)',
  'AHRQ':                   'AHRQ(AgencyforHealthcareResearchandQuality)',
  'Google Pixel':           'GooglePixel',
  'Boeing':                 'Boeing',
  'Lockheed Martin':        'LockheedMartin',
  'Collins Aerospace':      'CollinsAerospace',
  'ASML':                   'ASML',
  'AGCO':                   'Agco',
  'Trimble':                'Trimble',
  'KarlStorz':              'KarlStorz',
  'PlatformScience':        'PlatformScience',
  'Trane Technologies':     'TraneTechnologies',
  'Cormac':                 'Cormac',
  'Humatics':               'Humatics',
  'T-Mobile':               'T-Mobile',
  'Landis+Gyr':             'LandisGyr',
  'SunPower':               'SunPower',
  'Hughes Network Systems': 'HughesNetworkSystems',
  'SmartSky':               'SmartSky',
  'Anrim Technologies':     'AnrimTechnologies',
  'Maxtena':                'Maxtena',
  'SpaceX':                 'SpaceX',
  'FuturaCyber':            'FuturaCyber',
  'DCMobility':             'DCMobility',
  'Analog Devices':         'AnalogDevices',
  'Fend':                   'Fend',
  'Motorola Solutions':     'MotorolaSolutions',
  'Zebra Technologies':     'ZebraTechnologies',
};

const clients = [
  { title: 'Maryland Central Collection Unit (CCU)', description: 'A prestigious government client entrusting us with critical operations and IT modernization.' },
  { title: 'AHRQ',                   description: 'Agency for Healthcare Research and Quality — contributing to healthcare research and quality improvement.' },
  { title: 'Google Pixel',           description: 'Providing cybersecurity solutions ensuring the safety and integrity of consumer devices.' },
  { title: 'Boeing',                 description: 'Collaboration on the MA-25 project — a significant milestone in defense and aerospace.' },
  { title: 'Lockheed Martin',        description: 'Worked on the WildFire project with this leader in the aerospace and defense industry.' },
  { title: 'Collins Aerospace',      description: 'Delivered solutions for the KC-46 project — a rewarding aerospace engineering experience.' },
  { title: 'ASML',                   description: 'Provided lithography solutions contributing to advanced semiconductor manufacturing.' },
  { title: 'AGCO',                   description: 'IoT solutions helping AGCO enhance operations and agricultural efficiency.' },
  { title: 'Trimble',                description: 'Developed Android Telematics for Trimble, improving field operational capabilities.' },
  { title: 'KarlStorz',              description: 'Medical Endoscopy work contributing to advancements in minimally invasive surgery technology.' },
  { title: 'PlatformScience',        description: 'Developed a Virtual Vehicle Platform IoT solution revolutionizing fleet operations.' },
  { title: 'Trane Technologies',     description: 'IoT and Vehicle Telematics solutions enhancing HVAC operational efficiency.' },
  { title: 'Cormac',                 description: 'Cloud Solution AI/ML development contributing to their technological platform.' },
  { title: 'Humatics',               description: 'Robotics contributions to precision positioning and industrial automation.' },
  { title: 'T-Mobile',               description: 'Developed a Pet-IoT consumer device, enhancing their connected products portfolio.' },
  { title: 'Landis+Gyr',             description: 'Energy Meter technology contributing to smart grid and energy management systems.' },
  { title: 'SunPower',               description: 'Contributing to their mission of harnessing solar energy through embedded systems.' },
  { title: 'Hughes Network Systems', description: 'Collaboration on satellite communications and broadband network solutions.' },
  { title: 'SmartSky',               description: 'Contributed to air-to-ground connectivity technology and aviation networking.' },
  { title: 'Anrim Technologies',     description: 'Strategic technology collaboration and engineering milestone delivery.' },
  { title: 'Maxtena',                description: 'Advancing antenna and communication technologies for next-gen connectivity.' },
  { title: 'SpaceX',                 description: 'Collaboration with a leader in space technology on advanced aerospace systems.' },
  { title: 'FuturaCyber',            description: 'Contributed to cybersecurity platform and threat detection solutions.' },
  { title: 'DCMobility',             description: 'Mobility and transportation technology collaboration and systems development.' },
  { title: 'Analog Devices',         description: 'Advancing electronic device design and signal processing applications.' },
  { title: 'Fend',                   description: 'Cybersecurity collaboration on critical infrastructure protection solutions.' },
  { title: 'Motorola Solutions',     description: 'Contributed to mission-critical communication solutions and public safety systems.' },
  { title: 'Zebra Technologies',     description: 'Collaboration on enterprise-grade tracking and workflow intelligence technology.' },
];

const ClientCard = ({ client, index }) => {
  const filename = logoMap[client.title];
  let logo = null;
  if (filename) {
    try { logo = require(`../clients/${filename}.png`); } catch (_) {}
  }

  return (
    <div className="client-card">
      <div className="client-card-header">
        <span className="client-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="client-name">{client.title}</span>
        {logo && (
          <div className="client-logo-wrap">
            <img
              src={logo}
              alt={`${client.title} logo`}
              className="client-logo"
              onError={e => { e.target.parentElement.style.display = 'none'; }}
            />
          </div>
        )}
      </div>
      <p className="client-desc">{client.description}</p>
    </div>
  );
};

const Clients = () => (
  <div className="clients-page">
    <Navbar />
    <Hero image={heroImage} title="Our Clients" />

    <div className="page-content">
      <div className="page-intro">
        <p className="section-label">Who We Work With</p>
        <h1 className="section-heading">Trusted By <em>Industry Leaders</em></h1>
        <p className="about-text">
          Softick LLC has partnered with a diverse range of clients — from government agencies
          to Fortune 500 companies — each a leader in their domain. Every engagement pushes
          us to innovate and deliver excellence.
        </p>
      </div>

      <div className="clients-note">
        <Trophy size={18} color="#00e5ff" />
        <p className="clients-note-text">
          <strong>{clients.length} organizations</strong> across defense, aerospace, healthcare,
          telecom, energy, and enterprise technology have trusted Softick LLC to deliver.
        </p>
      </div>

      <div className="clients-grid">
        {clients.map((client, i) => (
          <ClientCard key={i} client={client} index={i} />
        ))}
      </div>
    </div>

    <Bottombar />
  </div>
);

export default Clients;