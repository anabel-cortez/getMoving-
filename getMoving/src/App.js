import React from "react";
import { useTimer } from "react-timer-hook";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <Router>
      <Switch>
        <Route path="/timer">
          <p>This is timer (replace with an component :))</p>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

//import React from 'react';
// import AlarmClock from "react-native-alarm-clock";

// // ...

// // Create an alarm at 1:55PM for next day, with the label 'My Custom Alarm'
// let date = new Date();
// date.setDate(date.getDate() + 1);
// date.setHours(13, 55);

// AlarmClock.createAlarm(date.toISOString(), 'My Custom Alarm');

// export default function App();
