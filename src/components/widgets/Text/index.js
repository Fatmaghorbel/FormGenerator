import React from "react";
import "../commonWidget.css";
import "./text.css";
import classnames from "classnames";
import Label from '../Label';

const Text = ({
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
      <div className="widget-input-container">
        <Label >{name}</Label>
        <input
          className="widget-input--root"
          type="text"
          name={name}
          onChange={(e) => handleChange(e.target.value, stateName)}
          value={value || ''}
          id={stateName}
        />
      </div>
    </div>
  );
};

export default Text;
