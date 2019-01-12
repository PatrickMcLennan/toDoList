import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  render() {
    const { todos } = this.props;
    return todos.map(todo => (
      <ToDoItem key={todo.id} todo={todo} />
    ));
  }
}

ToDos.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
};


export default ToDos;
