import React, { Component } from 'react';
import Task from './Task';

class Date extends Component {
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
              placeholder="type here..."
              required
            ></textarea>
          </div>

          <div className="form-field">
            <button type="submit">Add Task</button>
          </div>
        </form>
        <Task />
      </li>
    );
  }
}

export default Date;
