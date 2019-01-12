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
    const { todo, markComplete } = this.props;
    const { id, title } = todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={markComplete.bind(this, id)} />
          {' '}
          {title}
        </p>
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
  markComplete: PropTypes.func.isRequired,
};

export default ToDoItem;
