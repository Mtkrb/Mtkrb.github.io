import React from "react";
import Buttons from "./Buttons";

function Timer() {
  return (
    <div id="container">
      <div id="content">
        <div id="checks">
          <span className="check">
            <i className="fa fa-check fa-2x" aria-hidden="true"></i>
          </span>
          <span className="check">
            <i className="fa fa-check fa-2x" aria-hidden="true"></i>
          </span>
          <span className="check">
            <i className="fa fa-check fa-2x" aria-hidden="true"></i>
          </span>
          <span className="check">
            <i className="fa fa-check fa-2x" aria-hidden="true"></i>
          </span>
        </div>

        <div>
          <div id="timer-container">
            <span id="timer" className="large">
              25:00
            </span>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Timer