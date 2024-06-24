import React, { Component } from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

// 16.2
class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="Mohan" age={23} />
        <Greeting name="Rohan" age={25} />
        <Counter initialCount={10} />
      </div>
    );
  }
}

export default App;
