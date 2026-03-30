import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Home',       path: '/' },
    { name: 'Services',   path: '/services' },
    { name: 'Domain',     path: '/domain' },
    { name: 'Clients',    path: '/clients' },
    { name: 'Capability', path: '/capability' },
    { name: 'Contact Us', path: '/contact', cta: true },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">Soft<span>ick</span> LLC</Link>

        {/* Burger button */}
        <button
          className={`menu-icon ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop nav */}
        <ul className="nav-links-desktop">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className={`${location.pathname === link.path ? 'active' : ''} ${link.cta ? 'nav-cta' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className={`${location.pathname === link.path ? 'active' : ''} ${link.cta ? 'mobile-cta' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;