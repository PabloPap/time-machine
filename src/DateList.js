import React, { Component } from 'react';
import Date from './Date';

class DateList extends Component {
  // state = {
  //   done: false,
  // };

  // handleCheck = (isChecked) => {
  //   this.setState({
  //     done: isChecked,
  //   });
  // };

  // hendleDate = (date) => {
  //   if (this.state.done !== date.ongoing) {
  //     return date;
  //   }
  // };
  render() {
    const { dates } = this.props;
    return (
      <div className="list-dates">
        <div className="list-dates-title"></div>
        <div className="list-dates-content">
          <div className="list-row">
            <h2 className="list-task-title">Missions</h2>
            {dates.map((date) => (
              <ul key={date}>
                <Date onChangeCheck={this.handleCheck} date={date} />
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DateList;
