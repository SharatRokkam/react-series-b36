import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ count, setCount }) => {
  return (
    <>
      <h2>Child Component it does not need Data</h2>
      <GrandChild count={count} setCount={setCount} />
    </>
  );
};

export default Child;
