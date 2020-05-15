import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../media/bruh.png";

function NavBar() {
  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    setPath(window.location.pathname);
  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  };

  useLayoutEffect(() => {
    checkPath();
  });

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div className="navContent">
          {path == "/Countries" ? (
            <Link
              to="/World"
              className="navLinks"
              style={{ justifySelf: "end" }}
            >
              World
            </Link>
          ) : (
            <Link
              to="/Countries"
              className="navLinks"
              style={{ justifySelf: "end" }}
            >
              Countries
            </Link>
          )}
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ justifySelf: "center" }}
          />
          {path == "/US" ? (
            <Link
              to="/World"
              className="navLinks"
              style={{ justifySelf: "start" }}
            >
              World
            </Link>
          ) : (
            <Link
              to="/US"
              className="navLinks"
              style={{ justifySelf: "start" }}
            >
              US
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
