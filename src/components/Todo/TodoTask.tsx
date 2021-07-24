import React from 'react';
import { ITask } from '../../Interfaces';

interface props {
  task: ITask;
  taskRemove(taskNameToDelete: string): void;
  handleEditTask(taskToEdit: string): void;
}

const TodoTask = ({ task, taskRemove, handleEditTask }: props) => {
  return (
    <div className='card'>
      <p>
        <strong>{task.taskName}</strong>
      </p>
      <div className='card-chields'>
        <p>
          <strong>{task.deadline}</strong>
        </p>
      </div>

      <div>
        <button
          style={{ marginRight: '200px' }}
          className='btn'
          onClick={() => handleEditTask(task.taskName)}
        >
          Edit
        </button>
        <button className='btn' onClick={() => taskRemove(task.taskName)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
