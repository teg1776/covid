import React, { Component, useState, useEffect } from "react";
import Landing from "./components/Landing.jsx";
import SingleCountry from "./components/SingleCountry.jsx";
import AllCountries from "./components/AllCountries.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/single">Specific Country</Link>
            </li>
            <li>
              <Link to="/all">All Countries</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/single" component={SingleCountry} />
            <Route path="/all" component={AllCountries} />
            <Route path="*" component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
