import { useState, useMemo } from "react";

const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  const complexComputation = (num) => {
    console.log("computing....");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  const result = useMemo(() => complexComputation(count), [count]);
  return (
    <>
      <h3>Count : {count}</h3>
      <h3>Result : {result}</h3>
      <h3>renderCount : {renderCount}</h3>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Increment Render count
      </button>
    </>
  );
};

export default WithMemo;
