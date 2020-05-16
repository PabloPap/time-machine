import React, { Component } from 'react';
import './App.css';
import AddDate from './AddDate';
import DateList from './DateList';

class App extends Component {
  render() {
    const dates = ['2018-04-23', '2019-06-13', '2014-09-29'];
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Machine</h1>
        </header>
        <AddDate dates={dates} />
        <DateList dates={dates} />
      </div>
    );
  }
}

export default App;
