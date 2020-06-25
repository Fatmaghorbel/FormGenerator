import React, { Fragment } from 'react';
import "./controls.css"

const Controls = (props) => {
  const { fileChangeHandler, resetClickHandler, submitClickHandler, withBundle, withSrc, setWithBundle, setWithSrc } = props;
  debugger
  return (
    <div className="controls-container">
      {/*<div className="row">*/}
      {/*  <div className="col"></div>*/}
      {/*  <div className="col-8">*/}
      {/*    {loading ? "Please wait..." : "Compile"}*/}
      {/*    <div className="form-group files color">*/}
      {/*      <label>Upload Your File </label>*/}


      <input type="file" className="form-control-file controls-input" onChange={fileChangeHandler} />
      <div className="form-check controls-input">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" checked={withBundle} onChange={setWithBundle} />
          Générer un bundle
        </label>
      </div>
      <div className="form-check controls-input">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" checked={withSrc} onChange={setWithSrc} />
          Générer le code source
        </label>
      </div>
      <button type="button" className="btn btn-primary btn-sm controls-button" onClick={resetClickHandler}>Reset
      </button>
      <button type="button" className="btn btn-primary btn-sm controls-button" onClick={submitClickHandler}>Soumettre</button>

      {/*    </div>*/}
      {/*    {loading && <Spinner />}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
};

export default Controls