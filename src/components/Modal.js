import React from "react";

const Modal = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#contractModal"
      >
        Show contract details{" "}
      </button>
    </div>
  );
};

export default Modal;