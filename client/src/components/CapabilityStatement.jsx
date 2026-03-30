import React from 'react';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
import Hero from './Hero';
import heroImage from '../Website/5101597.jpg';
import './CapabilityStatement.css';
import './Services.css';

const services = [
  ['334614', null, 'Software and Other Prerecorded Compact Disc, Tape, and Record Reproducing'],
  ['423430', null, 'Computer and Computer Peripheral Equipment and Software Merchant Wholesalers'],
  ['511210', 'Yes', 'Software Publishers'],
  ['515111', null, 'Radio Networks'],
  ['541330', null, 'Engineering Services'],
  ['541513', null, 'Computer Facilities Management Services'],
  ['541519', null, 'Other Computer Related Services'],
  ['541690', null, 'Other Scientific and Technical Consulting Services'],
  ['541715', null, 'Research and Development in Physical, Engineering, and Life Sciences'],
  ['611420', null, 'Computer Training'],
  ['811212', null, 'Computer and Office Machine Repair and Maintenance'],
  ['811213', null, 'Communication Equipment Repair and Maintenance'],
];

const pscCodes = [
  ['R425', 'Support – Professional: Engineering/Technical'],
  ['D310', 'IT and Telecom – Cyber Security and Data Backup'],
  ['D317', 'IT and Telecom – Web-Based Subscription'],
  ['D316', 'IT and Telecom – Telecommunications Network Management'],
  ['7030', 'Information Technology Software'],
  ['J070', 'Maintenance, Repair, and Rebuilding of ADP Equipment'],
  ['L070', 'Technical Representative – ADP Equipment'],
  ['D319', 'IT and Telecom – Annual Software Maintenance Service Plans'],
  ['H970', 'Other Quality Control, Testing and Inspection – ADP Equipment'],
  ['H370', 'Inspection – ADP Equipment'],
  ['K070', 'Modification of Equipment – ADP Equipment'],
  ['H170', 'Quality Control – ADP Equipment'],
  ['N070', 'Installation of Equipment – ADP Equipment'],
  ['H270', 'Equipment and Materials Testing – ADP Equipment'],
  ['D318', 'IT and Telecom – Integrated Hardware/Software/Services Solutions'],
];

const overviewItems = [
  'Our People — talent-first culture with domain experts',
  'Performance-Based Processes — measurable, outcome-driven delivery',
  'Integrated Solutions Teams — cross-functional expertise on every engagement',
  'Client Relationship Management — long-term partnerships over transactions',
  'Strategic Mix of Technology and Business — bridging vision and execution',
];

const coreCapabilities = [
  'Consulting — strategy, planning, CMMI, change management',
  'Technology — full-stack development, embedded systems, networking',
  'Managed Services — IT management, maintenance, and support',
];

const consultServices = [
  'Business Strategy & Planning Support',
  'Change Management & Facilitation Support',
  'CMMI Process Development and Assessment Services',
  'Security Assessment',
  'Financial / Statistical Analysis',
  'Training',
];

const techServices = [
  'Application & Web Design and Development',
  'Networking, Cellular, and Satellite Communication',
  'Remote Weapon Systems, Avionics, and Sensor-Based Systems',
  'IoT End-to-End Solutions',
  'RF Communication and Embedded Systems',
  'Commercial Off the Shelf (COTS) Integration',
  'Database Design, Development & Maintenance',
  'Architecture Solutions',
  'Verification & Validation Services',
  'Software/Hardware Design, Development, Testing, Integration, and Manufacturing',
];

const CapSection = ({ title, children }) => (
  <div className="capability-section">
    <h2 className="cap-section-title">{title}</h2>
    {children}
  </div>
);

const CapList = ({ intro, items }) => (
  <>
    {intro && <p className="cap-text">{intro}</p>}
    <ul className="cap-list">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </>
);

const Capability = () => (
  <div className="capability-page">
    <Navbar />
    <Hero image={heroImage} title="Capability Statement" />

    <div className="page-content">
      <div className="page-intro">
        <p className="section-label">Capability Statement</p>
        <h1 className="section-heading">
          Our Proven <em>Capabilities</em>
        </h1>
        <p className="about-text">
          Softick LLC provides strategic consulting technology services and managed services
          to commercial, not-for-profit, and government organizations. As a Minority Owned
          Small Business, we are committed to excellence and creating innovative, flexible
          solutions for our state and federal clients.
        </p>
      </div>

      <CapSection title="Overview — What Sets Us Apart">
        <CapList
          intro="Softick LLC can mobilize the right people, skills, and technologies to help organizations improve their performance. Here's what differentiates us:"
          items={overviewItems}
        />
      </CapSection>

      <CapSection title="Core Capabilities">
        <CapList
          intro="Our technology experts and business professionals analyze, research, design, and implement solutions across:"
          items={coreCapabilities}
        />
      </CapSection>

      <CapSection title="Consulting Services">
        <CapList
          intro="Our Consulting Services focus on integrated solutions designed to enhance business performance through industry best practices:"
          items={consultServices}
        />
      </CapSection>

      <CapSection title="Technology Services">
        <CapList
          intro="Our Technology Services focus on developing robust, secure, and stable technology solutions:"
          items={techServices}
        />
      </CapSection>

      <CapSection title="Federal Certification">
        <p className="cap-text">None — We are actively expanding into the federal space. Currently serving private sector clients.</p>
      </CapSection>

      <CapSection title="Contract Vehicles">
        <p className="cap-text">None — We are actively expanding into the federal space. Currently serving private sector clients.</p>
      </CapSection>

      <CapSection title="State Certifications">
        <p className="cap-text">None — We are actively expanding into the federal space. Currently serving private sector clients.</p>
      </CapSection>

      <CapSection title="NAICS Codes">
        <div className="cap-table-wrapper">
          <table className="cap-table">
            <thead>
              <tr>
                <th>NAICS Code</th>
                <th>Primary</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map(([code, primary, desc], i) => (
                <tr key={i}>
                  <td>{code}</td>
                  <td>{primary ? <span className="cap-badge">Primary</span> : '—'}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CapSection>

      <CapSection title="PSC Codes">
        <div className="cap-table-wrapper">
          <table className="cap-table">
            <thead>
              <tr>
                <th>PSC Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {pscCodes.map(([code, desc], i) => (
                <tr key={i}>
                  <td>{code}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CapSection>
    </div>

    <Bottombar />
  </div>
);

export default Capability;