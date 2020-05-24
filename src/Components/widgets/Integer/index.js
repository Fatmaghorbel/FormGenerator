import React from 'react';
import classnames from "classnames";

const Integer = ({
                   type,
                   stateName,
                   name,
                   multiple,
                   description,
                   value,
                   handleChange,
                 }) => {
  return (
    <div
      className={classnames("widget-container")}
    >
      <div className="widget-integer-container">
        <input
          className="widget-integer--root"
          type="number"
          name={name}
          onChange={(e) => handleChange(e.target.value, stateName)}
          value={value || ''}
          id={stateName}
        />
      </div>
    </div>
  )
};

export default Integer