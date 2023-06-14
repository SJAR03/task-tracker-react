import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const Task_listComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

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