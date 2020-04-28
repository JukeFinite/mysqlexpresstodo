import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    counter: 0,
    todos: []
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }

  renderTodos = () => {
    if (this.state.todos.length === 0) {
      return <h1>No todos yet</h1>;
    } else {
      return (
        <ul>
          {
            this.state.todos.map(todo => {
              return <li
                key={todo.id}
                style={{ color: todo.completed ? 'blue' : 'red' }}
              >{todo.text}</li>
            })
          }
        </ul>
      );
    }
  }

  render() {
    console.log("Im inside render");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        { this.renderTodos() }
      </>
    );
  }
}





export default App;
