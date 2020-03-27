import React from 'react';
import TodoListContext from '../store/TodoListContext';

const useStore = (module) => {
  const context = React.useContext(TodoListContext);
  return module ? context[module] : context;
};

export default useStore;
