import React from 'react';
import SingleStatic from './../SingleStatic/';
import LeftAside from './../LeftAside/';
import RightAside from './../RightAside/';
import BottomPanel from './../BottomPanel/';
import './style.css';

class Into extends React.Component {
  render() {
    return (
        <div className="into">
          <LeftAside />
          <div className="svg-contain">
            <SingleStatic />
          </div>
          <RightAside />
          <BottomPanel />
        </div>
      )
  }
}

export default Into;