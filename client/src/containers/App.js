import React, { Component } from 'react';



class App extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}


export default App;
