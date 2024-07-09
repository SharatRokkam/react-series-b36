import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Count = () => {
  const { count } = useContext(CounterContext);
  return <h1>Count : {count}</h1>;
};

export default Count;
