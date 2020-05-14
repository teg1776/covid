import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";


function Landing() {
  return (
    <div>
        <nav className="wrapper">
          <div className="one pages">
            <div className="content">
              <h1>State by State Data</h1>
              <li>
                <Link to="/US">
                  <button type="button" class="btn btn-default btn-lg">
                    Here
                  </button>
                </Link>
              </li>
            </div>
          </div>
          <div className="two pages">
            <div className="content">
              <h1>All Countries Data</h1>
              <li>
                <Link to="/countries">
                  <button type="button" class="btn btn-default btn-lg">
                    Here
                  </button>
                </Link>
              </li>
            </div>
          </div>
          <div className="three pages">
            <div className="content">
              <h1>World Data</h1>
              <li>
                <Link to="/world">
                  <button type="button" class="btn btn-default btn-lg">
                    Here
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Landing;
