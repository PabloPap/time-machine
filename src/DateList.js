import React, { Component } from 'react';
import Date from './Date';

class DateList extends Component {
  render() {
    const { dates } = this.props;
    return (
      <div className="App__list">
        <h2 className="App__list--title">Missions</h2>
        <ul className="App__list--items">
          {dates.map((date) => (
            <Date date={date} key={date} />
          ))}
        </ul>
      </div>
    );
  }
}

export default DateList;
