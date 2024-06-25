import React from "react";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, count: 0 };
    console.log("constructor");
  }
  //componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  //shouldComponentUpdate

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (
      this.state.data !== nextState.data ||
      this.state.count !== nextState.count
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("data has been updated");
    }
    if (prevState.count !== this.state.count) {
      console.log("Count has been updated");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("render");
    //ternary operator condition ? 'yes' : 'no'
    return (
      <div>
        <h1>{this.state.data ? this.state.data.name : "loading...."} </h1>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}
