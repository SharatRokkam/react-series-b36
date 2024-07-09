import React from "react";

const GrandChild = ({ count, setCount }) => {
  return (
    <>
      <h3>GrandChild Component</h3>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </>
  );
};

export default GrandChild;
