import React, { Component } from "react";
import "./interface.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { get } from "../../services/apiRest";
import { setCookie } from "../../services/param";
import Navbar from "../../components/navbar";
import { AppLayout } from "../../components/AppLayout";
import { withRouter } from "react-router-dom";
import { VIEW_FORM_GENERATOR } from "../../constants";
import Spinner from "../../components/Spinner";
import DownloadZip from "./downloadZip";
import UploadZip from "./uploadZip";

export class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { taskList, loading } = this.state;
    return (
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
        <div>
          <label> Click here to dowload file</label>
        </div>
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
              type="radio"
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
        {/*<button
        type="button"
        className="btn btn-primary btn-sm controls-button"
        onClick={submitClickHandler}
      >
        Soumettre
      </button> */}

        {/*    </div>*/}
        {/*    {loading && <Spinner />}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default withRouter(Interface);
