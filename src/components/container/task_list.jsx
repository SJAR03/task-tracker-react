import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.css';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example 1',
    'Description 1',
    false,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    'Example 2',
    'Description 2',
    true,
    LEVELS.URGENTE
  );

  const defaultTask3 = new Task(
    'Example 3',
    'Description 3',
    true,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified');
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setLoading(true);

    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  function completedTask(task) {
    console.log('Complete this task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
    // Update the state of the componente with the new list of tasks and it will update
    // the iteration of the tasks in order to show the task updated
  }

  function deleteTask(task) {
    console.log('Delete this task:', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log('Add this task:', task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                deleted={deleteTask}></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please create one</h4>
      </div>
    );
  }

  const loadingStyle = {
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card header (title)*/}
          <div className='card-header p-3'>
            <h5>Your tasks:</h5>
          </div>
          {/* TODO: Add loading spinner */}
          {loading ? <p style={loadingStyle}>Loading task...</p> : tasksTable}
          {/* Card body (content) */}
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{ position: 'relative', height: '400px' }}></div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
