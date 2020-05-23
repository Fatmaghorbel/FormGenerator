import React, { Fragment } from 'react';
import '../commonWidget.css';
import './select.css';
import classnames from 'classnames';

const Select = ({ options, name, align }) => {
  return (
    <div className={classnames(
      "widget-container",
      { "widget--align-right": align === "right" },
      { "widget--align-left": align === "left" },
      { "widget--align-center": align === "center" },
    )}>
      <div className="widget-select-container">
        <select name={name || 'defaultSelect'} className="widget-select--root">
          {options.map(option => <option value={option.value}>{option.label}</option>)}
        </select>
      </div>
    </div>
  )
};

export default Select;