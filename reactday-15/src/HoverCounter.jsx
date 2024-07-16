import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <h2>Count: {count}</h2>
      <button onMouseOver={incrementCount}>Hover</button>
    </>
  );
};

export default WithCounter(HoverCounter, 5);
