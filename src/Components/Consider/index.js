import React from 'react';

const points = []

class Consider extends React.Component {
  state = {
    visibl: false
  }

  handleClick = (event) => {
    let point = ` "${event.clientX} ${event.clientY}",`;
    points.push(point);
    console.log(point)
  }

  create = () => {
    this.setState({
      visibl: true
    })
  }

  render() {
    return (
      <div className="consider map-usa" onClick={this.handleClick}>
        {this.state.visibl ? <p className="consider__display">{points}</p> : null}
        <button className="consider__btn" onClick={this.create}>Make</button>
      </div>
      )
  }
}

export default Consider;