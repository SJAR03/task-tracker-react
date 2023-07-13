import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);

    // Vaciar los campos de entrada
    e.target.reset();
  }

  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold',
  };

  const urgentlStyle = {
    color: 'yellow',
    fontWeight: 'bold',
  };

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold',
  };

  return (
    <form
      onSubmit={addTask}
      className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill pt-3'>
        <input
          ref={nameRef}
          id='inputName'
          type='text'
          className='form-control form-control-lg mb-2'
          required
          // autoFocus
          placeholder='Task name'
        />
        <input
          ref={descriptionRef}
          id='inputDescription'
          type='text'
          className='form-control form-control-lg'
          required
          placeholder='Task description'
        />
        {/* <label htmlFor='selectLevel' className='sr-only fw-bold pt-3 pb-3'>
          Priority
        </label> */}
        <select
          className='form-control form-control-lg mt-2'
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id='selectLevel'>
          <option value={LEVELS.NORMAL} style={normalStyle}>
            Normal
          </option>
          <option value={LEVELS.URGENTE} style={urgentlStyle}>
            Urgente
          </option>
          <option value={LEVELS.BLOCKING} style={blockingStyle}>
            Blocking
          </option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-2 mt-3'>
          {length > 0 ? 'Add new task' : 'Create your first task'}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
