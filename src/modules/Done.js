import React, { useContext, useEffect, useState } from 'react';
import { useObserver } from 'mobx-react';

import TodoListContext from '../store/TodoListContext';

function DondeTodo() {
  const { todos } = useContext(TodoListContext);
  const [todosDone, setTodosDone] = useState([]);

  useEffect(() => {
    const doneTodos = todos.filter((todo) => todo.status === 'done');
    setTodosDone(doneTodos);
  }, [todos]);

  return useObserver(() => (
    <>
      <h1>Done</h1>
      {JSON.stringify(todosDone)}
    </>
  ));
}

export default DondeTodo;
