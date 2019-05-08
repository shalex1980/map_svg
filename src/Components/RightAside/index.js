import React from 'react';
import './style.css';

function RightAside(props) {
  const { state } = props;
  console.log(Object.keys(state));
  const tmp = Object.keys(state).map(index => {
    return <li>{index} <span>{state[index]}</span></li>
  })
  return (
      <div className="right-aside">
        <h3>Right Aside</h3>
        <ul>
          {tmp}
        </ul>
      </div>
    )
}

export default RightAside;