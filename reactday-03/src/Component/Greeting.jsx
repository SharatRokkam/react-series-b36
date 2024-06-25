import React, { useState } from "react";

//Hooks - before introduction of hooks , functions were stateless

export default function Greeting(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>you have click {count} times</h4>
      <button onClick={() => setCount(count - 5)}>Clicked</button>
    </div>
  );
}
