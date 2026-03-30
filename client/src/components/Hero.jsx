import React from 'react';
import './Hero.css';

function Hero({ image, title }) {
  return (
    <div className="hero">
      <img src={image} alt="hero" className="hero-image" />
      {title && (
        <h1 className="hero-title">
          {title.split(' ').map((word, i, arr) =>
            i === arr.length - 1
              ? <span key={i}>{word}</span>
              : <React.Fragment key={i}>{word} </React.Fragment>
          )}
        </h1>
      )}
    </div>
  );
}

export default Hero;