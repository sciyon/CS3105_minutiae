import React, { useState, useEffect } from 'react';
import './style.css';

export default function PomodoroClock() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning && minutes === 0 && seconds === 0) {
      setTimerRunning(false);
    }

    if (timerRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setTimerRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning, minutes, seconds]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handlePause = () => {
    setTimerRunning(false);
  };

  const handleResume = () => {
    setTimerRunning(true);
  };

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setTimerRunning(false);
  };

  const handleIncrement = () => {
    if (minutes < 60) {
      setMinutes(minutes + 5);
    }
  };

  const handleDecrement = () => {
    if (minutes > 0 || (minutes === 0 && seconds > 0)) {
      if (seconds === 0) {
        setMinutes(minutes - 5);
        setSeconds(0);
      } else {
        if (minutes === 0) {
          setMinutes(59);
        } else {
          setMinutes(minutes - 1);
        }
        setSeconds(59);
      }
    }
  };

  return (
    <div className="pomodoro">
      <div className="pomodoro-content">
        <h1>Pomodoro Clock</h1>
        <p>
          A Pomodoro clock, often referred to as a Pomodoro timer, is a time
          management technique and tool that helps individuals improve their
          productivity and focus.
        </p>
        <div className="time-box">
          <h2>
            {minutes < 10 ? '0' : ''}
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </h2>
          <div className="time-buttons">
            <div className="plus-button" onClick={handleIncrement}>
              <div className="sign">+</div>
            </div>
            <div className="minus-button" onClick={handleDecrement}>
              <div className="sign">-</div>
            </div>
          </div>
        </div>
        <div className="control-btns">
          {!timerRunning ? (
            <div className="start" onClick={handleStart}>
              <div className="text">START</div>
            </div>
          ) : (
            <>
              <div className="pause" onClick={handlePause}>
                <div className="text">PAUSE</div>
              </div>
              <div className="reset" onClick={handleReset}>
                <div className="text">RESET</div>
              </div>
            </>
          )}
          {timerRunning && (
            <div className="resume" onClick={handleResume}>
              <div className="text">RESUME</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
