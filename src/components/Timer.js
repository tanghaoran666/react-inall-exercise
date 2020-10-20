import React from "react";
import { NavLink } from "react-router-dom";
import "./Timer.css";

class Timer extends React.Component {
  state = {
    time: 0,
    start: false,
    end: false,
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ time: event.target.value });
  };
  reduce = () => {
    this.setState({
      time: this.state.time - 1,
    });
  };

  timerStart = () => {
    const timer = setInterval(() => {
      if (this.state.time <= 1) {
        this.setState({
          end: true,
        });
      } else {
        this.setState({
          time: this.state.time - 1,
        });
      }
    }, 1000);

    this.setState({
      start: true,
      timer,
    });
  };

  render() {
    return (
      <div className="timerBackground">
        <h1 className="timer-title">在线倒计时器</h1>
        <div className="timerPad">
          <div className="timerPad-up">
            设置时间
            <input
              type="text"
              name="time"
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <button className="start" onClick={this.timerStart}>
            Start
          </button>
        </div>

        <div className="timeWindow">
          {this.state.start
            ? this.state.end
              ? "End"
              : `${this.state.time} Seconds`
            : "Start"}
        </div>
      </div>
    );
  }
}

export default Timer;
