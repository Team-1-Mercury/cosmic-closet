import React from 'react';
import { RatingScale } from '../index.js';
import './SizeScale.scss';

function SizeScale() {
  return (
    <div>
      <RatingScale
        name="Quality"
        label1="Too small "
        label2="Perfect"
        label3="Too Large"
      />
    </div>
  );
}

export default SizeScale;
