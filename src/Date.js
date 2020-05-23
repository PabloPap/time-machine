import React, { Component } from 'react';
import Task from './Task';

class Date extends Component {
  state = {
    value: '',
    task: '',
  };

  render() {
    const { date } = this.props;
    return (
      <li className="Date">
        <h3>{date}</h3>

        <form>
          <div className="form-field">
            <label>Add Your Task:</label>
            <textarea
              rows="5"
              cols="30"
              placeholder="Add your task"
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
