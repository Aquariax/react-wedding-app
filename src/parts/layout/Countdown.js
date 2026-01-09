import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    const daysLeft = <div className="times" id="day">{days} days</div>;
    const hoursLeft = <div className="times" id="hour">{hours} hours</div>;
    const minutesLeft = <div className="times" id="minute">{minutes} minutes</div>;
    const secondsLeft = <div className="times" id="second">{seconds} seconds</div>

    return [<div className="timer">{daysLeft} {hoursLeft} {minutesLeft} {secondsLeft}</div>];
};

export { useCountdown };