import React from 'react';
import states from './../../source/data/points';

class Svg extends React.Component {
  render () {
    //console.log(states);
    //let polygons = [];
    /*for(let state of states) {
      console.log(state);
      //polygons.push(<polygon points={state} />)
    }*/
    let polygons = Object.keys(states).map(point => <polygon points={states[point]} />)

    return (
      <svg className="svg-map">
        {polygons}
      </svg>
      )
  }
}

export default Svg;