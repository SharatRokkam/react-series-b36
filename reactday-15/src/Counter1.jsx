import React from "react";
import UseCounter from "./UseCounter";

const Counter1 = () => {
  const [count, increment, decrement] = UseCounter(10);
  return (
    <>
      <h2>Count1: {count}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default Counter1;
