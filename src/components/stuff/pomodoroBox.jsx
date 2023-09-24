import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

const PomodoroClock = () => {
  const [time, setTime] = useState(25 * 60); // time in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timer = useTimer({
    expiryTimestamp: Date.now() + time * 1000,
    onExpire: () => console.warn('Timer finished'),
  });

  useEffect(() => {
    if (isActive) {
      timer.start();
    } else {
      timer.pause();
    }
  }, [isActive]);

  useEffect(() => {
    timer.restart(Date.now() + time * 1000);
  }, [time]);

  const handleAddTime = () => {
    if (time < 60 * 60) {
      setTime(time + 5 * 60);
    }
  };

  const handleSubtractTime = () => {
    if (time > 5 * 60) {
      setTime(time - 5 * 60);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  return (
    <div className="pomodoro-clock">
        <h1>Pomodoro Clock</h1>
        <p>A Pomodoro clock, often referred to as a Pomodoro timer, is a time management technique and tool that helps individuals improve their productivity and focus.</p>
        <div className="time-box">
          <h1>25:00</h1>
          <div className="time-buttons">
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <button>Start</button>
      </div>
  );
};

export default PomodoroClock;