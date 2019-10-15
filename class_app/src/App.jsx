import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lhs: "", rhs: "" };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <form>
          <input
            name="lhs"
            type="text"
            onChange={this.onChange}
            value={this.state.lhs}
          />
          <br />
          <input
            name="rhs"
            type="text"
            onChange={this.onChange}
            value={this.state.rhs}
          />
          <br />
          <input type="submit" value="Calculate" />
        </form>
        <div>Enter two numbers and press "Calculate" to get the sum.</div>
      </>
    );
  }
}

export default App;
