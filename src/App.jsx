import React from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState((prevState, _props) => ({counter: prevState.counter + 1}));
  }

  render() {
    return (
    <div className="App">
      <div>Compute counter: {this.state.counter}</div>
      <Calculator callback={this.incrementCounter} />
      <Calculator callback={this.incrementCounter} />
      <Calculator callback={this.incrementCounter} />
    </div>
  );
  }
}

export default App;
