import React from "react";

export function modal() {
  return (
    <div>
      <div id="options" style={{ display: "none" }}>
        <div className="timer-option">
          <div>Work Length</div>
          <button className="length-setter">-</button>
          <input type="text" name="work-length" value="25" />
          <button className="length-setter">+</button>
        </div>

        <div className="timer-option">
          <div>Break Length (Short)</div>
          <button className="length-setter">-</button>
          <input type="text" name="short-break-length" value="5" />
          <button className="length-setter">+</button>
        </div>

        <div className="timer-option">
          <div>Break Length (Long)</div>
          <button className="length-setter">-</button>
          <input type="text" name="long-break-length" value="15" />
          <button className="length-setter">+</button>
        </div>
      </div>
    </div>
  );
}

export default modal;
