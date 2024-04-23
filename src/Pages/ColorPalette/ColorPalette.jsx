import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ColorPalette.css';
import palettes from '../../PaletteData/pallete.json';
import PaletteHeader from '../../Components/PaletteHeader/PaletteHeader';

function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState(null);

  const copyColor = (color) => {
    navigator.clipboard
      .writeText(color.color)
      .then(() => {
        setCopiedColor(color);
        setTimeout(() => {
          setCopiedColor(null);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy color to clipboard:', error);
      });
  };

  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
  const paletteId = pathnameParts[pathnameParts.length - 1];

  const [paletteColors, setPaletteColors] = useState([]);

  useEffect(() => {
    const selectedPalette = palettes.find(
      (palette) => palette.id === paletteId
    );
    if (selectedPalette) {
      setPaletteColors(selectedPalette.colors);
    }
  }, [paletteId]);

  return (
    <div className="palette-colors-container">
      <PaletteHeader />
      {paletteColors.map((color, index) => (
        <div
          key={index}
          className="palette-color-container"
          style={{ backgroundColor: color.color }}
          onClick={() => copyColor(color)}
        >
          <span className="palette-copy-btn">Copy</span>
          <span className="palette-color-name">{color.name}</span>
        </div>
      ))}
      {copiedColor && (
        <div
          className="copied-color-overlay"
          style={{ backgroundColor: copiedColor.color }}
        >
          <h2>Copied</h2>
          <span>{copiedColor.color}</span>
        </div>
      )}
    </div>
  );
}

export default ColorPalette;
