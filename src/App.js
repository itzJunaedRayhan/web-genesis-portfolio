import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blog/Blogs/Blogs";
import Contacts from "./Components/Contact/Contacts/Contacts";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Portfolio from "./Components/Portfolio/Portfolio/Portfolio";
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
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/blog">
            <Blogs/>
          </Route>
          <Route path="/contact">
            <Contacts/>
          </Route>
          <Route path="/login">
            <Login/>
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
