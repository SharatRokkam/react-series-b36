// import { useCallback, useState } from "react";
// import List from "./List";
import "./App.css";
import WithMemo from "./WithMemo";
// function App() {
//   const [input, setInput] = useState(1);
//   const [light, setLight] = useState(true);

//   const getItems = useCallback(() => {
//     return [input + 10, input + 100];
//   }, [input]);

//   const theme = {
//     backgroundColor: light ? "white" : "grey",
//     color: light ? "grey" : " white",
//   };

//   return (
//     <>
//       <div style={theme}>
//         <input
//           type="number"
//           value={input}
//           onChange={(e) => setInput(parseInt(e.target.value))}
//         />
//         <button onClick={() => setLight((prevlight) => !prevlight)}>
//           {light ? "dark mode" : "light mode"}
//         </button>
//         <List getItems={getItems} />
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";

const App = () => {
  return (
    <div>
      <WithMemo />
    </div>
  );
};

export default App;
