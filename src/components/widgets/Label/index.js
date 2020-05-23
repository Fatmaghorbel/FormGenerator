import React, { Fragment } from 'react';
import '../commonWidget.css'
import './label.css';
import classnames from 'classnames';

const Label = ({ children, target, align }) => {
  return (
    <div className={classnames(
      "widget-container",
      { "widget--align-right": align === "right" },
      { "widget--align-left": align === "left" },
      { "widget--align-center": align === "center" },
    )}>
      <div className="widget-label-container">
        <label
          className="widget-label--root"
          for={target}
        >{children}</label>
      </div>
    </div>
  )
};

export default Label;