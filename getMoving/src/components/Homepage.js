import React, { useState, useEffect } from "react";
//import alarm.mp3 from ".src/alarm.mp3";

export default class AlarmClock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "",
      play: false,
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
    this.audio = new Audio("../alarm.mp3");
    this.audio.play();
  }

  // audio = new Audio("../alarm.mp3");

  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if (this.state.currentTime === this.state.alarmTime) {
        // alert("TIME");
        this.audio.play();
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Get Moving</h1>
        <h2>It is {this.state.currentTime}.</h2>
        <h2>{this.alarmMessage}</h2>
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    );
  }
}

// ReactDOM.render(
//     <AlarmClock />,
//     document.getElementById('alarm-clock')
// );
