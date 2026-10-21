import { useState, useEffect } from 'react';

export function useCountdown(initialHours = 4, initialMinutes = 38, initialSeconds = 19) {
  const [timeLeft, setTimeLeft] = useState(() => {
    return initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
    totalSeconds: timeLeft,
    formatted: `${hours}:${minutes}:${seconds}`,
  };
}

export default useCountdown;
