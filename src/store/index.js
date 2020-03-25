import React from 'react';
import PropTypes from 'prop-types';

import { useLocalStore } from 'mobx-react';
import TodoListContext from './TodoListContext';

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    showModal: false,
    addTodo: (todo) => {
      store.todos.unshift(todo);
      localStorage.setItem('todos', JSON.stringify(store.todos));
    },
    changeStatus: (id) => {
      store.todos = store.todos.map((todo) => {
        if (todo.id === id) {
          const status = todo.status === 'undone' ? 'done' : 'undone';
          const date = new Date();
          return { ...todo, status, date };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(store.todos));
    },
    editTodo: (id, data) => {
      store.todos = store.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...data };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(store.todos));
    },
    deleteTodo: (id) => {
      store.todos = store.todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(store.todos));
    },
  }));

  return (
    <TodoListContext.Provider value={store}>{children}</TodoListContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
