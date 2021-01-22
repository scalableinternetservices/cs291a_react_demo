import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: "",
      right: "",
      status: "Input values and click on 'Calculate!'"
    }
  }

  componentDidMount() {
    console.log("mounted");
  }

  calculate = () => {
    this.setState((prevState, _props) => ({status: prevState.left + prevState.right}));
    this.props.callback();
  }

  updateInput = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
    <>
      <input name="left" onChange={this.updateInput} value={this.state.left} />
      <input name="right" onChange={this.updateInput} value={this.state.right} />
      <input type="submit" onClick={this.calculate} value="Calculate!" />
      <div>{this.state.status}</div>
    </>
  );
  }
}

export default Calculator;
