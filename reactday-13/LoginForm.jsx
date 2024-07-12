import { useReducer } from "react";

const LoginForm = () => {
  const initialState = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "userName": {
        return { ...state, username: action.payload };
      }
      case "passWord": {
        return { ...state, password: action.payload };
      }
      case "toggleRememberMe": {
        return { ...state, rememberMe: !state.rememberMe };
      }
      default: {
        throw new Error(`Unknown type : ${action.type}`);
      }
    }
  };

  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", state);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            UserName :
            <input
              type="text"
              value={state.username}
              onChange={(e) =>
                dispatch({ type: "userName", payload: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Password :
            <input
              type="password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "passWord", payload: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={(e) => dispatch({ type: "toggleRememberMe" })}
              checked={state.rememberMe}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
