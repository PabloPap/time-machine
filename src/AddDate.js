import React, { Component } from 'react';

class AddDate extends Component {
  state = {
    date: new Date().toISOString().split('T')[0],
    dateExists: false,
  };

  sameDateExists = (currDate) => {
    const dates = this.props.dates;
    for (let date of dates) {
      if (date === currDate) {
        return true;
      }
    }
    return false;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const dateExists = this.sameDateExists(this.state.date);

    if (!dateExists) {
      this.props.onAddDate(this.state.date);
    }

    this.setState({ dateExists });
  };

  handleDateChange = (event) => {
    const { value } = event.target;
    this.setState((currState) => ({
      ...currState,
      date: value,
    }));
  };

  render() {
    return (
      <div className="App__form">
        <form onSubmit={this.handleFormSubmit} className="App__form--date">
          <div className="App__form--body">
            <label>Choose Your Past:</label>
            <input
              type="date"
              max={new Date().toISOString().split('T')[0]}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="App__form--btn">
            <button type="submit">Add Date</button>
          </div>
        </form>
        {this.state.dateExists ? (
          <p className="App__form--error">This date has already been chosen</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}
export default AddDate;
