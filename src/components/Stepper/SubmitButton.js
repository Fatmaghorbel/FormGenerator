import React from 'react';
import './previousButton.css'

const SubmitButton =(props) => {
  const { handleOnClick } = props
  return (
    <button className="btn btn-primary submitButton-container" onClick={() => handleOnClick()}>Submit</button>
  )
};

export default SubmitButton;
