import React, { useState } from "react";
import "./App.css";
import Child from "./Components/Child";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Parent Component</h1>
      <Child count={count} setCount={setCount} />
    </>
  );
};

export default App;
