import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const startTimer = () => {
    countRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(countRef.current);
  };

  return (
    <>
      <h3>Timer : {count}</h3>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
};

export default StopWatch;
