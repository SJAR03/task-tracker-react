import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';

const Task_listComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
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
                <th scope='col'>Status</th>
              </tr>
            </thead>{' '}
            <tbody>
              {/* TODO: Iterar sobre una lista de tareas */}
              <TaskComponent task={defaultTask}></TaskComponent>
            </tbody>
          </table>
        </div>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default Task_listComponent;
