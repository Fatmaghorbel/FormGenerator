import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import './nav-bar.css'

const Navbar = ({title}) => {
  return (
    <div className="nav-bar-container">
    <nav className="navbar navbar-dark bg-dark ">
      <a className="navbar-brand " href="#">
        <img
          src="/bonita-logo.png"
          width="30"
          height="30"
          className="d-inline-block nav-bar__brand-img"
          alt=""
        />
        {title}
      </a>
    </nav>
      </div>
  );
};

export default Navbar;
