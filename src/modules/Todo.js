import React, { useState, useContext } from 'react';
import { useObserver } from 'mobx-react';

import { Button } from 'antd';
import TodoListContext from '../store/TodoListContext';
import TodoForm from '../components/TodoForm';
import List from '../components/List';

function ManageTodo() {
  const [isModalShow, setIsModalShow] = useState(false);
  const context = useContext(TodoListContext);

  return useObserver(() => (
    <main className="App" style={{ margin: '0 auto' }}>
      { JSON.stringify(context.todos)}
      { context.todos.length > 0 ? <List /> : <h1>Do not have any todo yet...</h1> }
      <Button
        onClick={() => setIsModalShow(true)}
        size="large"
        style={{ marginTop: '16px' }}
      >
        ADD TODO
      </Button>
      <TodoForm key={Math.random()} isModalShow={isModalShow} onCancel={() => setIsModalShow(false)} />
    </main>
  ));
}

export default ManageTodo;
