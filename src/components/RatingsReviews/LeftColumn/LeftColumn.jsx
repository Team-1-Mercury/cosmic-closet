import React from 'react';
import {
  Title, StarRating, StarBreakdown, SizeScale, ComfortScale,
} from '../index.js';
import './LeftColumn.scss';

function LeftColumn() {
  return (
    <div className="rr-left-column">
      <Title />
      <StarRating />
      <StarBreakdown />
      <SizeScale />
      <ComfortScale />
    </div>
  );
}

export default LeftColumn;