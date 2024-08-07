// src/components/ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const { todos, filter } = useSelector((state) => state.todos);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.isDone;
    if (filter === 'not_done') return !todo.isDone;
    return true; // 'all'
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default ListTask;
