import React from 'react';
import './HomeColorCard.css';

function HomeColorCard({ palette, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(palette.url);
    }
  };

  return (
    <div className="home-card" onClick={handleClick}>
      <div className="home-card-colors">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="home-card-color"
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <div className="home-card-title-container">
        <span className="home-card-title">{palette.paletteName}</span>
        <span className="home-card-code">{palette.id}</span>
      </div>
    </div>
  );
}

export default HomeColorCard;
