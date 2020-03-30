import React from 'react';
import { useObserver } from 'mobx-react';

import { Button } from 'antd';
import { useModal, useStore } from '../hooks';
import TodoForm from '../components/TodoForm/TodoForm';
import List from '../components/List';

function ManageTodo() {
  const store = useStore();
  const Modal = useModal();

  return useObserver(() => (
    <main className="App" style={{ margin: '0 auto' }}>
      { store.todos.length > 0 ? <List /> : <h1>Do not have any todo yet...</h1> }
      <Button
        onClick={Modal.openModal}
        size="large"
        style={{ marginTop: '16px' }}
      >
        ADD TODO
      </Button>
      <TodoForm key={Math.random()} isModalShow={Modal.visible} onCancel={Modal.closeModal} />
    </main>
  ));
}

export default ManageTodo;
