import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Aside from './Components/Aside/';
import Svg from './Components/Svg/';
import Consider from './Components/Consider/';
import Into from './Components/Into/';

function App() {
  return (
    <Router>
      <div className="App">
        <Aside />
        <Route path="/consider" component={Consider} />
        <Route path="/svg" component={Svg} />
        <Route path="/states/:state" component={Into} />
      </div>
    </Router>
  );
}

export default App;
