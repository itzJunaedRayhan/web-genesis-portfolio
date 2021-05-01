import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home/Home";
import Resume from "./Components/Resume/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="*">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
