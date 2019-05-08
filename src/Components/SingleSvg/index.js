import React from 'react';
import states from './../../source/data/points';
import { move } from '../../helper/functions';

function SingleSvg(props) {
  let state = props.stateName;
  let statePoints = states[state];
  return  (
      <svg className="svg-map"
        
      >
        <polygon data-name={state} points={move(statePoints)} />
      </svg>
    )
}



export default SingleSvg;