import React from 'react';
import './Bottombar.css';

const Bottombar = () => {
  return (
    <footer className="bottombar">
      <div className="bottombar-dot" />
      <span className="bottombar-copy">
        Copyright &copy; {new Date().getFullYear()} Softick LLC — All Rights Reserved
      </span>
      <div className="bottombar-dot" />
    </footer>
  );
};

export default Bottombar;