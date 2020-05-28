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
      <li>
        <div className="App__card--inner">
          <h2>{date}</h2>
          <form onSubmit={this.handleFormSubmit} className="App__card">
            <div className="App__card--form">
              <label>Add Your Task</label>
              <textarea
                rows="3"
                cols="30"
                placeholder="type here..."
                value={this.state.value}
                onChange={this.handleAddTask}
                required
              ></textarea>
            </div>
            <div className="App__card--btn">
              <button type="submit">Add Task</button>
            </div>
          </form>
          <Task task={this.state.task} />
        </div>
      </li>
    );
  }
}

export default Date;
