import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  markComplete = () => {

  }

  render() {
    const { todos } = this.props;
    return todos.map(todo => (
      <ToDoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
    ));
  }
}

ToDos.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  todosmarkComplete: PropTypes.func.isRequired,
};


export default ToDos;
