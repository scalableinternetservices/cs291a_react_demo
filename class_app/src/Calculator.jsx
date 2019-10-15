import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lhs: "",
      rhs: "",
      status: 'Enter two numbers and press "Calculate" to get the sum.'
    };
  }

  componentDidMount() {
    console.log("mounted");
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ status: `Result: ${this.state.lhs + this.state.rhs}` });
    this.props.updateCounter();
  };

  render() {
    let style = this.props.hidden ? { display: "none" } : { display: "block" };
    return (
      <div style={style}>
        <form onSubmit={this.onSubmit}>
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
        <div>{this.state.status}</div>
      </div>
    );
  }
}

export default Calculator;
