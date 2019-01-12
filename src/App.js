import React, { Component } from 'react';
import './App.css';
import ToDos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take Out The Trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner With The Wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting With the Boss',
        completed: false,
      },
    ],
  }

  markComplete = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter(todo => todo.id !== id)],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <ToDos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
