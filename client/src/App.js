import './global.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Domain from './components/Domain';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Capability from './components/CapabilityStatement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/capability" element={<Capability />} />
      </Routes>
    </Router>
  );
}

export default App;
