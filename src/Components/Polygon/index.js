import React from 'react';

class Polygon extends React.Component {
  render() {
    return (
        <polygon className="" points={this.props.points} />
      )
  }
}

export default Polygon;