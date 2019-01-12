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
    console.log(id);
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <ToDos todos={todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
