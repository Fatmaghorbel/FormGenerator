import React from 'react';
import './previousButton.css'

const PreviousButton =(props) => {
  const { handleOnClick } = props
  return (
    <button className="btn btn-primary previousButton-container" onClick={() => handleOnClick()}>Previous</button>
  )
};

export default PreviousButton;
