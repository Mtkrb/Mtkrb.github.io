import React from "react";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="settings"
          onClick={() => this.setState({ isOpen: true })}
        ></button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <div>
                <label htmlFor="pomodoro">Pomodoro</label>
                <input id="pomodoro" type="number" value={25}/>
              </div>
              <div>
                <label htmlFor="short-break">Shork Break</label>
                <input id="short-break" type="number" value={5}/>
              </div>
              <div>
                <label htmlFor="long-break">Long Break</label>
                <input id="long-break" type="number" value={15}/>
              </div>
              <div>
                <label htmlFor="break-interval">Number of pomodoro between break</label>
                <input id="break-interval" type="number" value={4}/>
              </div>
              <div className="buttons">
              <button>
                Save
              </button>
              <button onClick={() => this.setState({ isOpen: false })}>
                Cancel
              </button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
