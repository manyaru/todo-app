// src/reducers/todoReducer.js
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, FILTER_TODO } from '../actions/todoActions';

const initialState = {
  todos: [],
  filter: 'all' // 'all', 'done', 'not_done'
};

let nextId = 1;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextId++,
            description: action.payload.description,
            isDone: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
        )
      };
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
};

export { todoReducer }; // Ensure this export is present
