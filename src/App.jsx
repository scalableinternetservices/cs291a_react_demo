import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: "",
      right: ""
    }
  }

  updateInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
    <div className="App">
      <input name="left" onChange={this.updateInput} value={this.state.left} />
      <input name="right" onChange={this.updateInput} value={this.state.right} />
      <input type="submit" value="Calculate!" />
    </div>
  );
  }
}

export default App;
