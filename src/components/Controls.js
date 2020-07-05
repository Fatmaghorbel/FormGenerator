import React, { Fragment } from "react";
import "./controls.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "./Modal";
import Popover from "./Popover";

const Controls = (props) => {
  const {
    fileChangeHandler,
    resetClickHandler,
    submitClickHandler,
    withBundle,
    withSrc,
    setWithBundle,
    setWithSrc,
    isactive,
    checkedbox
  } = props;
  debugger;
  return (
    <div>
      <div className="controls-container">
        {/*<div className="row">*/}
        {/*  <div className="col"></div>*/}
        {/*  <div className="col-8">*/}
        {/*    {loading ? "Please wait..." : "Compile"}*/}
        {/*    <div className="form-group files color">*/}
        {/*      <label>Upload Your File </label>*/}

        <input
          type="file"
          className="form-control-file controls-input"
          onChange={fileChangeHandler}
        />

        <div className="form-check controls-input">
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              checked={withBundle}
              onChange={setWithBundle}
            />
            Générer un bundle
          </label>
        </div>
        <div className="form-check controls-input">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={withSrc}
              onChange={setWithSrc}
            />
            Générer le code source
          </label>
        </div>
        {!isactive ? (
          <button
            type="button"
            disabled
            className="btn btn-primary btn-sm controls-button"
            onClick={submitClickHandler}
          >
            Soumettre
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm controls-button"
            onClick={submitClickHandler}
          >
            Soumettre
          </button>
        )}
        <button
          type="button"
          className="btn btn-primary btn-sm controls-button"
          onClick={resetClickHandler}
        >
          Reset
        </button>
      </div>
      <div class="card w-50 p-3">
        <h5 class="card-header bg-danger text-white ">
          What is Bonita React Generator?
        </h5>
        <div class="card-body ">
          <h5 class="card-title"></h5>
          <p class="card-text text-danger font-weight-bold">
            This tool allows you to generate a React Application based on a
            Contract !
          </p>
          <p class="card-text text-danger">
            If you wanna know more details about the contract click on the
            button below
          </p>
          <button href="#" class="btn btn-primary">
            Show more contract details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
