import React from 'react';
import states from './../../source/data/points';
import Polygon from './../Polygon/';
import './style.css';

class Svg extends React.Component {
  state = {
    stateName : null
  }
  handleTip = (ev) => {
    let name = ev.target.getAttribute('data-name');
    this.setState({
      stateName : name
    });
  }
  render () {
    let polygons = Object.keys(states).map(point => ( 
      <Polygon 
        key={states[point][1]} 
        state={point} 
        points={states[point]} 
        hover={this.handleTip}
      />
      )
    )

    return (
      <div className="svg-wrap">
        <p className="svg-tips">{this.state.stateName}</p>
        <svg className="svg-map">
          {polygons}
        </svg>
      </div>
      )
  }
}

export default Svg;