import React from 'react';
import {washington, oregon, californ, nevada, arisona, uta, idaho, montana, wyoming } from '../../source/data/points';

export default (props) => {
  return (
    <svg className="svg-map">
      <polygon points={washington} />
      <polygon points={oregon} />
      <polygon points={californ} />
      <polygon points={nevada} />
      <polygon points={arisona} />
      <polygon points={uta} />
      <polygon points={idaho} />
      <polygon points={montana} />
      <polygon points={wyoming} />
    </svg>
    )
}