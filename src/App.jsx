import React from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <div className="App">
      <Calculator />
      <Calculator />
      <Calculator />
    </div>
  );
  }
}

export default App;
