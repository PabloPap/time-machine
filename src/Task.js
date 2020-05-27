import React from 'react';

const Task = (props) => {
  return (
    <div className="App__task">
      <h3>Task</h3>
      <p>{props.task}</p>
    </div>
  );
};

export default Task;
