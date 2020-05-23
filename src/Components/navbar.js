import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import './nav-bar.css'

const Navbar = ({title}) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand " href="#">
        <img
          src="/bonita-logo.png"
          width="30"
          height="30"
          class="d-inline-block nav-bar__brand-img"
          alt=""
        />
        {title}
      </a>
    </nav>
  );
};

export default Navbar;
