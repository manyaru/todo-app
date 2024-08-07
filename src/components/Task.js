// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../actions/todoActions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task:', description);
    if (newDescription) {
      dispatch(editTodo(id, newDescription));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{description}</span>
      <button onClick={handleToggle}>{isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
