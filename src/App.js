import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import ToDos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take Out The Trash',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner With The Wife',
        completed: true,
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...todos, newTodo] });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header />
        <AddToDo addTodo={this.addTodo} />
        <ToDos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
