import React from 'react';
import states from './../../source/data/points';

function SingleStatic() {
  //let name = match.params.state;
  let state = states["Washington"];
  return  (
      <svg className="svg-map"
      >
        <polygon data-name={"Washington"} points={move(state)} />
      </svg>
    )
}

function move(points) {
  let point = points[0];
  let x = +point.split(' ')[0] / 2;
  return points.map(item => {
            let point = item.split(' ');
            console.log(point);
            let result = (+point[0] - x) +", " + point[1];
            console.log(result);
            return result;
          })
}

export default SingleStatic;