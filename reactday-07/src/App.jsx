import React, { useState } from "react";
import "./App.css";
import StopWatch from "./Components/StopWatch";
// import Controlled from "./Components/Controlled";
// import UnControlled from "./Components/Uncontrolled";

const App = () => {

  const [count, setCount] =useState(0);


  const increment = () =>{
    
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () =>{
    setCount(prevCount => prevCount - 1)
  }
  return (
    <>
      {/* <Controlled />
      <UnControlled /> */}

      {/* <StopWatch /> */}

      <h2>Counter : {count}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default App;
