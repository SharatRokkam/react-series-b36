import React from "react";
import UseCounter from "./UseCounter";

const Counter3 = () => {
  const [count, increment, decrement] = UseCounter(100);
  return (
    <>
      <h2>Count3: {count}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default Counter3;
