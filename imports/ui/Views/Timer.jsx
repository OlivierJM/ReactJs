import React, { Component, PropTypes } from "react";

import Header from "./Header.jsx";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      reseted: false,
      icon: "play_circle_outline"
    };
  }

  myCallback() {
    // alert("Done");
  }

  handlePause(event) {
    event.preventDefault();
    this.setState({
      isPaused: false,
      icon: "pause"
    });
  }

  handleReset(event) {
    event.preventDefault();
    location.reload();
  }

  render() {
    return (
      <div>
        <div className="timer" style={{ marginTop: "60" }} />
        <div style={{ float: "right" }}>
          <i
            className="material-icons large"
            id="pause"
            onClick={this.handlePause.bind(this)}
          >
            {this.state.icon}
          </i>
          <br />
          <i
            className="material-icons large"
            id="reset"
            onClick={this.handleReset.bind(this)}
          >
            refresh
          </i>
        </div>
      </div>
    );
  }
}
