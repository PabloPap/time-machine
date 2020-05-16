import React, { Component } from 'react';

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
              placeholder="Comment text."
              required
            ></textarea>
          </div>

          <div className="form-field">
            <button type="submit">Add Task</button>
          </div>

          <div>
            <h3>Task:</h3>
            <p>{}</p>
          </div>

          <div className="form-field">
            <label>Done</label>
            <input type="checkbox" />
          </div>
        </form>
      </li>
    );
  }
}

export default Date;
