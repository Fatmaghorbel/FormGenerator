import React, { Fragment } from 'react';
import "jquery/dist/jquery.slim";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoModal = ({modalRef}) => {
  return (
    <Fragment>
      {/* Modal  */}

      <div className="modal fade" id="contractModal" tabIndex="-1" role="dialog" ref={modalRef}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contract details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Here you'll find all information related to the contract</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Upload Process file
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default InfoModal;

