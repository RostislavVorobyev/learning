import { useState, useEffect } from "react";

export default function ProgressBar({ timeLimit, onTimeout }) {
  const [timer, setTimer] = useState(timeLimit);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeLimit);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeLimit]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="queston-time" value={timer} max={timeLimit}></progress>;
}
