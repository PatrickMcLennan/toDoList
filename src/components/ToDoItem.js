import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  getStyle = () => {
    const { todo } = this.props;
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: todo.completed ? 'line-through' : 'none',
    };
  }

  render() {
    const { todo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>{todo.title}</p>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default ToDoItem;
