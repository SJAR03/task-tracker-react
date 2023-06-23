import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const Task_listComponent = () => {
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
    setLoading(false);

    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  };

  return (
    <div>
      <div className='col-12'>
        <div className='card'></div>
        {/* Card header (title)*/}
        <div className='card-header p-3'>
          <h5>Your tasks:</h5>
        </div>
        {/* Card body (content) */}
        <div
          className='card-body'
          data-mdb-perfect-scrollbar='true'
          style={{ position: 'relative', height: '400px' }}>
          <table>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>{' '}
            <tbody>
              {tasks.map((task, index) => {
                return <TaskComponent key={index} task={task}></TaskComponent>;
              })}
            </tbody>
          </table>
        </div>
        <TaskForm></TaskForm>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default Task_listComponent;
