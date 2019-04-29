import React from 'react';

class Svg extends React.Component {
  render() {
    return (
      <svg className="svg">
        <rect width="100" height="200" fill="orange" >
          
        </rect>
        <text x="200" y="40" fill="black" fontFamily="sans-serif" fontSize="32pt">Georgia</text>
        <text x="63" y="63" fill="white" fontFamily="sans-serif" fontSize="10pt">(cx,cy)</text>
      </svg>
      )
  }
}

export default Svg;