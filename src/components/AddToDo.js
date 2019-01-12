import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddToDo extends Component {
  state = {
    title: '',
  }

  formInput = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    const { addTodo } = this.props;
    const { title } = this.state;
    e.preventDefault();
    addTodo(title);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add To Do..."
          value={title}
          onChange={this.formInput}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddToDo;
