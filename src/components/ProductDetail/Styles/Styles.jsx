/* eslint-disable no-unused-expressions */
import React from 'react';
import { ChevronRight, CheckCircleFill } from 'react-bootstrap-icons';
import { detailStore } from '../../../stores.js';
import './Styles.scss';

function Styles() {
  const styles = detailStore((state) => state.styles);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const setSelectedStyle = detailStore((state) => state.setSelectedStyle);
  const setSelectedSize = detailStore((state) => state.setSelectedSize);
  const setSelectedQuantity = detailStore((state) => state.setSelectedQuantity);
  const setImgIdx = detailStore((state) => state.setSelectedImageIndex);

  const handleStyleChange = (style) => {
    setImgIdx(0);
    setSelectedSize('');
    setSelectedQuantity('1');
    setSelectedStyle(style);
  };

  const handleKeyPress = (e, style) => {
    // TODO: Allow this in eslint
    e.code === 'Enter' && handleStyleChange(style);
  };

  return (
    <div className="pd-styles">
      <div className="pd-selected-style">
        <span className="pd-selected-title">Selected Style</span>
        <ChevronRight />
        <span>{selectedStyle.name}</span>
      </div>
      <div className="pd-styles-container">
        {styles.map((style) => (
          <div
            key={style.style_id}
            role="button"
            tabIndex={0}
            style={{
              backgroundImage: `url(${style.photos[0].thumbnail_url})`,
              backgoundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '80px',
              height: '80px',
            }}
            className={`pd-style-icon ${style.name === selectedStyle.name ? 'selected' : ''} ${style.photos[0].thumbnail_url == null ? 'empty' : ''}`}
            onKeyDown={(e) => { handleKeyPress(e, style); }}
            onClick={() => { handleStyleChange(style); }}
            aria-label={`Select style${style.style_id}`}
          >
            {style.photos[0].thumbnail_url == null && style.name}
            {style.name === selectedStyle.name && <CheckCircleFill className="pd-style-check" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Styles;
