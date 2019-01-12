import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import ToDos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
      .then(res => this.setState({ todos: [...res.data] }));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.setState({ todos: [...todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    const { todos } = this.state;
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(res => this.setState({ todos: [...todos, res.data] }));
  }

  render() {
    const { todos } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <AddToDo addTodo={this.addTodo} />
                <ToDos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
