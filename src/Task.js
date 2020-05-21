import React from 'react';

const Task = (props) => {
  return (
    <div>
      <h3>Task:</h3>
      <p>{props.task}</p>
    </div>
  );
};

export default Task;
