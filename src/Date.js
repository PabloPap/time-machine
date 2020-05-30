import React, { Component } from 'react';
import Task from './Task';

class Date extends Component {
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
                required
              ></textarea>
            </div>
            <div className="App__card--btn">
              <button type="submit">Add Task</button>
            </div>
          </form>
          <Task />
        </div>
      </li>
    );
  }
}

export default Date;
