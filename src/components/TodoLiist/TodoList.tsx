import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from '../../Interfaces';
import TodoTask from '../Todo/TodoTask';

const TodoList: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleAddTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const handleRemoveTask = (taskToDelete: string): void => {
    setTodoList(
      todoList.filter(task => {
        return task.taskName !== taskToDelete;
      })
    );
  };

  const handleEditTask = (taskToEdit: string): void => {
    //   const updateTodos = todoList.map(todo => {
    //     if (todo.taskName == taskToEdit) {
    //       const newTask = { taskName: task, deadline: deadline };
    //       return todo;
    //     }
    //     setTodoList([...todoList]);
    //   });
    // const newTodo = prompt('Lets Make Something');
    // const editTodo = todoList.filter(todo => {
    //   if (todo.taskName == taskToEdit + 1) {
    //     todo.taskName = taskToEdit;
    //   }
    //   return todo;
    // });
    // setTodoList(newTodo);
    // setTodoList(
    //   todoList.filter(task => {
    //     const newTask = { taskName: task, deadline: deadline };
    //     return [...todoList, newTask];
    //   })
    // );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className='form'>
        <input
          value={task}
          type='text'
          name='task'
          placeholder='Task'
          onChange={handleChange}
        />
        <input
          value={deadline}
          type='number'
          min='0'
          name='deadline'
          placeholder='Deadline (in Days...) '
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Add In List</button>
      </div>
      {todoList.map((task: ITask, key: number) => {
        return (
          <TodoTask
            task={task}
            key={key}
            taskRemove={handleRemoveTask}
            handleEditTask={handleEditTask}
          ></TodoTask>
        );
      })}
    </div>
  );
};

export default TodoList;
