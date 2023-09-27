import React, { useEffect, useState } from 'react';
import './style.css';

export default function ClockBox() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className='clock-boxx'>
      <div className='clock'>
        <span className="time">{formattedTime}</span>
      </div>
    </div>
  );
}