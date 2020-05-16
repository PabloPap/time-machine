import React, { Component } from 'react';

class AddDate extends Component {
  state = {
    date: '',
    dateExists: false,
  };

  render() {
    return (
      <form>
        <label>Choose Your Past</label>
        <input type="date" max={new Date().toISOString().split('T')[0]} />
      </form>
    );
  }
}

export default AddDate;
