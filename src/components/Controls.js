import React, { Fragment } from "react";
import "./controls.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "./Modal";
import Popover from "./Popover";
import InfoModal from './InfoModal';

const Controls = (props) => {
  const {
    fileChangeHandler,
    resetClickHandler,
    submitClickHandler,
    withBundle,
    withSrc,
    setWithBundle,
    setWithSrc,
    isActive,
    checkedbox
  } = props;
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
        {!isActive ? (
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
      <InfoModal/>
    </div>
  );
};

export default Controls;
