import React, { Component } from 'react';
import Task from './Task';

class Date extends Component {
  state = {
    value: '',
    task: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.setState({
      task: this.state.value,
    });
  };

  handleAddTask = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { date } = this.props;

    return (
      <li className="Date">
        <h3>{date}</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-field">
            <label>Add Your Task:</label>
            <textarea
              rows="5"
              cols="30"
              placeholder="Add your task"
              value={this.state.value}
              onChange={this.handleAddTask}
              required
            ></textarea>
          </div>
          <div className="form-field">
            <input type="submit" value="Add Task" />
          </div>
        </form>
        <Task task={this.state.task} />
      </li>
    );
  }
}

export default Date;
