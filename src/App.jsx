import React from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showCalculators: false
    }
  }

  incrementCounter = () => {
    this.setState((prevState, _props) => ({counter: prevState.counter + 1}));
  }

  showCalculators = () => {
    this.setState({showCalculators: true});
  }

  render() {
    let display;
    if (this.state.showCalculators) {
      display = (
        <>
        <div>Compute counter: {this.state.counter}</div>
        <Calculator callback={this.incrementCounter} />
        <Calculator callback={this.incrementCounter} />
        <Calculator callback={this.incrementCounter} />
        </>
      )
    } else {
      display = (<input type="submit" onClick={this.showCalculators} value="Show Calculator" />)
    }

    return (
    <div className="App">
      {display}
    </div>
  );
  }
}

export default App;
