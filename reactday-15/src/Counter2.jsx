import React from "react";
import UseCounter from "./UseCounter";

const Counter2 = () => {
  const [count, increment, decrement] = UseCounter();
  return (
    <>
      <h2>Count2: {count}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default Counter2;
