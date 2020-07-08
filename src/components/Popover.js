import React from "react";
import "jquery/dist/jquery.slim";
// import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const Popover = ({ title }) => {
  return (
    <div>
      Copy
      <button
        type="button"
        class="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="top"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      >
        Popover on top
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="right"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      >
        Popover on right
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="bottom"
        data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus."
      >
        Popover on bottom
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="left"
        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      >
        Popover on left
      </button>
    </div>
  );
};

export default Popover;
