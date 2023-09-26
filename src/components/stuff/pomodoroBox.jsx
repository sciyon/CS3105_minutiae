import React, { useState, useEffect } from 'react';
import './style.css';

export default function PomodoroClock() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning && minutes === 0 && seconds === 0) {
      setTimerRunning(false);
      alert('Time is up!');
    }

    if (timerRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setTimerRunning(false);
            alert('Time is up!');
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
    if (minutes === 0 && seconds === 0) {
      alert('Time is already 00:00');
      return;
    }
    setTimerRunning(true);
  };

  const handlePause = () => {
    setTimerRunning(false);
    setTimerPaused(true);
  };

  const handleResume = () => {
    setTimerRunning(true);
    setTimerPaused(false);
  };

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setTimerRunning(false);
    setTimerPaused(false);
  };

  const handleIncrement = () => {
    if (!timerRunning && minutes <= 60) {
      if (minutes === 60) {
        alert('Maximum time reached (60:00)');
      } else {
        setMinutes(minutes + 5);
      }
    }
  };

  const handleDecrement = () => {
    if (!timerRunning && (minutes > 5 || (minutes === 5 && seconds > 0))) {
      if (minutes === 0) {
        alert('Cannot have a countdown with 0 time.');
      } else {
        if (minutes === 0) {
          setMinutes(59);
        } else {
          setMinutes(minutes - 5);
        }
        setSeconds(0);
      }
    } else if (minutes <= 5) {
      alert('Cannot decrement below 5 minutes.');
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
            {!timerRunning && !timerPaused && (
              <div className="plus-button" onClick={handleIncrement}>
                <div className="sign">+</div>
              </div>
            )}
            {!timerRunning && !timerPaused && (
              <div className="minus-button" onClick={handleDecrement}>
                <div className="sign">-</div>
              </div>
            )}
          </div>
        </div>
        <div className="control-btns">
          {!timerRunning && !timerPaused && (
            <div className="start" onClick={handleStart}>
              <div className="text">START</div>
            </div>
          )}
          {timerRunning && !timerPaused && (
            <div className="pause" onClick={handlePause}>
              <div className="text">PAUSE</div>
            </div>
          )}
          {timerPaused && (
            <div className="resume" onClick={handleResume}>
              <div className="text">RESUME</div>
            </div>
          )}
          {(timerRunning || timerPaused) && (
            <div className="reset" onClick={handleReset}>
              <div className="text">RESET</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
