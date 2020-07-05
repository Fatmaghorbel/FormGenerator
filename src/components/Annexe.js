import React, { Fragment } from "react";
import "./annexe.css";

const Annexe = (props) => {
  const { logList } = props;
  return (
    <Fragment>
      <div className="annexe-container">
        {(logList || []).map((log) => {
          return (
            <div>
              <p className={log.className}>{`> ${log.content}`}</p>
              {log.url && (
                <a href={log.url} target="_blank">
                  {log.url}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Annexe;
