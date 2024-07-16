import React from "react";
import WithCounter from "./WithCounter";
import WithName from "./WithName";

const ClickCounter = (props) => {
  const { count, incrementCount, name } = props;
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Click</button>
      <h3>Name is : {name}</h3>
    </>
  );
};

export default WithName(WithCounter(ClickCounter, 10));
