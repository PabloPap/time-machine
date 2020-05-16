import React, { Component } from 'react';
import Date from './Date';

class DateList extends Component {
  state = {
    date: '',
    done: false,
  };

  render() {
    const { dates } = this.props;

    return (
      <div className="list-dates">
        <div className="list-dates-title"></div>
        <div className="list-dates-content">
          <div className="list-row">
            <h2 className="list-task-title">Done</h2>
            <ul>
              {dates.map((date) => (
                <Date date={date} key={date} />
              ))}
            </ul>
          </div>
          <div className="list-row">
            <h2 className="list-task-title">Ongoing</h2>
            <ul>
              {dates.map((date) => (
                <Date date={date} key={date} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DateList;
