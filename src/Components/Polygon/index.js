import React from 'react';
import {Link} from 'react-router-dom';

class Polygon extends React.Component {
  handleClick = (ev) => {
    let name = ev.target.getAttribute('data-name');
  }
  onMouseEnter = (ev) => {
    let name = ev.target.getAttribute('data-name');
    console.log(name);
  }
  render() {
    const {state, points, hover} = this.props;
    return (
      <Link to={`states/${state}`} >
        <polygon 
          className={state} 
          data-name={state}
          points={points} 
          onClick={this.handleClick}
          onMouseEnter={hover}
        />
      </ Link>

      )
  }
}

export default Polygon;