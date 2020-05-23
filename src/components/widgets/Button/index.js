import React, { Fragment } from "react";
import "../commonWidget.css";
import "./button.css";
import classnames from "classnames";

const Button = ({ type, handleClick, name, label, align, disabled }) => {
  return (
    <div
      className={classnames(
        "widget-container",
        { "widget--align-right": align === "right" },
        { "widget--align-left": align === "left" },
        { "widget--align-center": align === "center" }
      )}
    >
      <div className="widget-button-container">
        <button
          className="widget-button--root"
          name={name}
          type={type}
          onClick={handleClick}
          disabled={disabled}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default Button;
