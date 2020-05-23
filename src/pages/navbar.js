import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = ({}) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand " href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="60"
          height="60"
          class="d-inline-block "
          alt=""
        />
        Task List
      </a>
    </nav>
  );
};

export default Navbar;
