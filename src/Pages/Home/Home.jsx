import React, { useState, useEffect } from 'react';
import './Home.css';
import HomeColorCard from '../../HomeColorCard/HomeColorCard';
import palettes from '../../PaletteData/pallete.json';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [paletteUrl, setPaletteUrl] = useState('');

  const clickHandler = (url) => {
    if (!url) return;
    setPaletteUrl(url);
    navigate('/palette/' + url);
  };

  useEffect(() => {
    // Обновляем цвета на всей странице при изменении URL палитры
    const root = document.documentElement;
    if (paletteUrl) {
      const palette = palettes.find((p) => p.url === paletteUrl);
      if (palette) {
        palette.colors.forEach((color, index) => {
          root.style.setProperty(`--color-${index}`, color.color);
        });
      }
    } else {
      for (let i = 0; i < 20; i++) {
        root.style.setProperty(`--color-${i}`, '#ffffff');
      }
    }
  }, [paletteUrl]);

  return (
    <>
      <div className="home-card-container">
        {palettes.map((palette, index) => (
          <HomeColorCard
            key={index}
            palette={palette}
            onClick={() => clickHandler(palette.url)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
