import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test="display-counter">the counter is currently {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button">
            increament</button>
      </div >
    );
  }

}

export default App;
