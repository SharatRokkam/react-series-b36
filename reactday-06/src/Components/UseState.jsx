import { useState } from "react";

// Fragments vs div
const Sharat = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count is increasing by 1 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default Sharat;
