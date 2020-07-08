import React from 'react';
import './nextButton.css'

const NextButton =(props) => {
  const { handleOnClick } = props;
  return (
    <button className="btn btn-primary nextButton-container" onClick={() => handleOnClick()}>Next</button>
  )
};

export default NextButton