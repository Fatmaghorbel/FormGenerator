import React, { Fragment } from 'react';
import "./annexe.css"

const Annexe = (props) => {
  const { logList } = props;
  return (
    <Fragment>
      <div className="annexe-container">
        {
          (logList || []).map(log => {
            return <p className={log.className}>{`> ${log.content}`}</p>
          })
        }
      </div>
    </Fragment>
  )
}

export default Annexe