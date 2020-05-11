import React, { Component, useState, useEffect } from "react";
import Search from "./components/Search.jsx";
import SingleCountry from "./components/SingleCountry.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


function App() {
  return (
    <div className="App">
      <h1>Covid Project</h1>
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single">Specific Country</Link>
            </li>
            <li>
              <Link to="/all">All Countries</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/single">
              <SingleCountry />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
