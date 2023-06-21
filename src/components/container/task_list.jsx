import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const Task_listComponent = () => {

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified');
    setLoading(false);
  
    return () => {
      console.log('TaskList component is going to unmount...');
    }
  }, [tasks])
  

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea');
  }

  return (
    <div>
      <div>
        <h1>
          Your tasks:
        </h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}


export default Task_listComponent