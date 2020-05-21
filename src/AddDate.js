import React, { Component } from 'react';

class AddDate extends Component {
  state = {
    date: '',
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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Choose Your Past</label>
          <input
            type="date"
            max={new Date().toISOString().split('T')[0]}
            onChange={this.handleDateChange}
          />
          <button type="submit">Add Date</button>
        </form>
        {this.state.dateExists ? (
          <p className="error">This date has already been chosen</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}
export default AddDate;
