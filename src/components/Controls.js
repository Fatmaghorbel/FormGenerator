import React, { Fragment } from "react";
import "./controls.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

const Controls = (props) => {

  const {
    withBundle,
    withSrc,
    setWithBundle,
    setWithSrc,
  } = props;

  return (
    <div className="controls-container">
      <div className="custom-control custom-checkbox">
        <input type="checkbox"
               checked={withBundle}
               onChange={setWithBundle}
               className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Generate a bundle</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input"
               checked={withSrc}
               onChange={setWithSrc}
               id="customCheck2" />
        <label className="custom-control-label" htmlFor="customCheck2">Generate source code</label>
      </div>
    </div>
  );
};

export default Controls;
