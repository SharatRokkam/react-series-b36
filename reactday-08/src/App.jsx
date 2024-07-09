// import { useEffect, useState } from "react";
import "./App.css";
import DocTitle from "./DocTitle";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       <div>{data ? JSON.stringify(data) : "loading..."}</div>
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
      <DocTitle />
    </>
  );
}
