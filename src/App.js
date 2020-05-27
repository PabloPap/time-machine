import React, { Component } from 'react';
import './App.css';
import AddDate from './AddDate';
import DateList from './DateList';

class App extends Component {
  state = {
    dates: [],
  };

  addDate = (date) => {
    this.setState((currState) => ({
      dates: [...currState.dates, date],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Machine</h1>
        </header>
        <AddDate dates={this.state.dates} onAddDate={this.addDate} />
        <DateList dates={this.state.dates} />
      </div>
    );
  }
}

export default App;
