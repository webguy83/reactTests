import React, {Component} from 'react';

class App extends Component {

  state = {
    counter: 0
  }

  counterClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  deccounterClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  render() {
    return (
      <div className="App" data-test="my-component-test-app">
        <h1 data-test="test-counter-h1">This will display the counter of {this.state.counter}</h1>
        <button data-test="test-counter-button" onClick={this.counterClick}>Click to cunter the counter</button>
        <button data-test="test-deccounter-button" onClick={this.deccounterClick}>Click to cunter the deccounter</button>
      </div>
    );
  }
}

export default App;
