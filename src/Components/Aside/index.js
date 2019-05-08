import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Aside () {
  return (
    <aside className="aside">
      <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/consider">Consider</Link>
          <Link to="/svg">Svg</Link>
        </nav>
    </aside>
    )
}

export default Aside;
