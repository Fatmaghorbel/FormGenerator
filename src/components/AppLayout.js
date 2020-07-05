import Navbar from './navbar';
import React, { Fragment } from 'react';
import './applayout.css'
import classnames from "classnames";

export const AppLayout = ({ children, title, classes = "" }) => {
  return (
      <Fragment>
        <Navbar title={title} />
        <div className={classnames("app-layout__body-container", classes)}>
          {children}
        </div>
      </Fragment>
  )
}