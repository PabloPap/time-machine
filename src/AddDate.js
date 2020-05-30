import React, { Component } from 'react';

class AddDate extends Component {
  state = {
    date: new Date().toISOString().split('T')[0],
    dateExists: false,
    dateEmpty: false,
  };

  render() {
    return (
      <div className="App__form">
        <form onSubmit={this.handleFormSubmit} className="App__form--date">
          <div className="App__form--body">
            <label>Choose Your Past:</label>
            <input type="date" max={new Date().toISOString().split('T')[0]} />
          </div>

          <div className="App__form--btn">
            <button type="submit">Add Date</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddDate;
