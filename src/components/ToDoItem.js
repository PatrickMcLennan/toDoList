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
    const { todo, markComplete, delTodo } = this.props;
    const { id, title } = todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={markComplete.bind(this, id)} />
          {' '}
          {title}
          <button onClick={delTodo.bind(this, id)} style={btnStyle}>x</button>
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
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 5px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  fontSize: '20px',
};

export default ToDoItem;
