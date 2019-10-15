import React from "react";
import "./App.css";
import Calculator from "./Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showCalculator: false };
  }

  toggleCalculators = () => {
    this.setState((prevState, props) => ({
      showCalculator: !prevState.showCalculator
    }));
  };

  updateCounter = () => {
    console.log("Update");
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.toggleCalculators}>Toogle Calculators</button>
        <Calculator
          hidden={!this.state.showCalculator}
          updateCounter={this.updateCounter}
        />
      </>
    );
  }
}

export default App;
