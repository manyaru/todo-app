// src/components/Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../actions/todoActions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(filterTodo('all'))}>All</button>
      <button onClick={() => dispatch(filterTodo('done'))}>Done</button>
      <button onClick={() => dispatch(filterTodo('not_done'))}>Not Done</button>
    </div>
  );
};

export default Filter;
