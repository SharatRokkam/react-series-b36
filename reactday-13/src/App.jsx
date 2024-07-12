// import React, { useReducer } from "react";
import "./App.css";

// const initialCount = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": {
//       return { count: state.count + 1 };
//     }
//     case "decrement": {
//       return { count: state.count - 1 };
//     }
//     case "input": {
//       return { count: action.payload };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialCount);

//   return (
//     <>
//       <h2>Count : {state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
//       <br />
//       <input
//         type="text"
//         value={state.count}
//         onChange={(e) =>
//           dispatch({ type: "input", payload: Number(e.target.value) })
//         }
//       />
//     </>
//   );
// };

// export default App;


import LoginForm from "../LoginForm";

const App = () =>{
  return(
    <>
    <LoginForm />
    </>
  )
}

export default App;

