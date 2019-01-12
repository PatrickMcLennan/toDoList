import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  render() {
    const { todos, markComplete } = this.props;
    return todos.map(todo => (
      <ToDoItem key={todo.id} todo={todo} markComplete={markComplete} />
    ));
  }
}

ToDos.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  markComplete: PropTypes.func.isRequired,
};


export default ToDos;
