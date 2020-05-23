import Navbar from './navbar';
import React, { Fragment } from 'react';
import './applayout.css'

export const AppLayout = ({ children, title }) => {
  return (
      <Fragment>
        <Navbar title={title} />
        <div className="app-layout__body-container">
          {children}
        </div>
      </Fragment>
  )
}