import React from 'react';
import './App.css';
import Main from './pages/Main';
import Bears from './pages/Bears';
import Pokemon from './pages/Pokemon';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Link to="/pokemon">
          <button>Pokemon</button>
        </Link>
        <Link to="/bears">
          <button>Bears</button>
        </Link>
        <Switch>
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/bears" component={Bears} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
