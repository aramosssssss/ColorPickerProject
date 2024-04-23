import React from 'react';
import './PaletteHeader.css';
import { Link } from 'react-router-dom';

function PaletteHeader() {
  return (
    <div className="palette-page-header">
      <div className="palette-header-left">
        <Link className="palette-header-back-btn" to="/">
          &#8592; Back
        </Link>
      </div>
      <div className="palette-header-center">
        <span> Color Format</span>
      </div>
      <div className="palette-header-right"></div>
    </div>
  );
}

export default PaletteHeader;
