import React from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, openCalculator: false };
  }

  startCalculators = () => {
    this.setState({ openCalculator: true });
  };

  updateCounter = () => {
    console.log("Update");
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    let node;
    if (this.state.openCalculator) {
      node = (
        <>
          <Calculator updateCounter={this.updateCounter} />
          <Calculator updateCounter={this.updateCounter} />
        </>
      );
    } else {
      node = <button onClick={this.startCalculators}>Start calculators</button>;
    }

    return (
      <>
        <div>Number of calculations: {this.state.counter}</div>
        {node}
      </>
    );
  }
}

export default App;
