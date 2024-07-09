import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CountControls = () => {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CountControls;
