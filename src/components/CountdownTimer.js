import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timeComponents.push(
      <div key={interval} className="countdown-segment">
        <span className="countdown-number">{timeLeft[interval]}</span>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      {timeComponents.length ? timeComponents : <span>We're launching!</span>}
    </div>
  );
};

export default CountdownTimer;
