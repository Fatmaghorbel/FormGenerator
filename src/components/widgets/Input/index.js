import React from "react";
import "../commonWidget.css";
import "./input.css";
import classnames from "classnames";

const Input = ({
  required,
  value,
  handleChange,
  name,
  type,
  placeholder,
  align,
  disabled,
  readOnly
}) => {
  return (
    <div
      className={classnames(
        "widget-container",
        { "widget--align-right": align === "right" },
        { "widget--align-left": align === "left" },
        { "widget--align-center": align === "center" }
      )}
    >
      <div className="widget-input-container">
        <input
          className="widget-input--root"
          type={type}
          name={name}
          onChange={(e) => handleChange(e, name)}
          value={value}
          placeholder={placeholder}
          id={name}
          required={required}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default Input;
