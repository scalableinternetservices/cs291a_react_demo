import React from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  updateCounter = () => {
    console.log("Update");
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <>
        <div>Number of calculations: {this.state.counter}</div>
        <Calculator updateCounter={this.updateCounter} />
        <Calculator updateCounter={this.updateCounter} />
      </>
    );
  }
}

export default App;
