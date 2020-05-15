import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/bruh.png";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div className="navContent">
          <Link to="/US" className="navLinks">
            US
          </Link>
          <img className="logo" src={logo} alt="logo" />
          <Link to="/World" className="navLinks">
            World
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
