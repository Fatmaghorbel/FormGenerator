import React from "react";

const Modal = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#modifyContractModal"
      >
        Click here for information
      </button>
      <div
        className="modal fade"
        id="modifyContractModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Actions you can apply on the Contract
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
            <div className="modal-body text-danger">
              Il you want to Modify your Contract , you can go to the Editor and
              make your changes ! But if you want to skip this Action , you can
              go straightforward to the next Step
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
