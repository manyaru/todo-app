// src/App.js
import React from 'react';
import AddTask from './components/Addtask';
import ListTask from './components/Listtask';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
};

export default App;
