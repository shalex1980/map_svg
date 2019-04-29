import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Svg from './Components/SvgMap/';
import Consider from './Components/Consider/';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/consider">Consider</Link>
          <Link to="/svg">Svg</Link>
        </nav>
       <Route path="/consider" component={Consider} />
       <Route path="/svg" component={Svg} />
      </div>
    </Router>
  );
}

export default App;
