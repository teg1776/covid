import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Countries from "./components/Countries.jsx";
import US from "./components/US.jsx";
import World from "./components/World.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <NavBar />
        </Switch>

        <Route path="/US" component={US} />
        <Route path="/countries" component={Countries} />
        <Route path="/world" component={World} />
      </Router>
    </div>
  );
}

export default App;
