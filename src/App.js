import React, { useState } from 'react';
import './App.css';

import { Button } from 'antd';

import StoreProvider from './store';
import TodoForm from './components/TodoForm';
import List from './components/List';
// import TodoListContext from './store/TodoListContext';

function App() {
  const [isModalShow, toggleModal] = useState(false);

  // useEffect(() => {
  //   const localTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  // }, []);

  return (
    <div className="App">
      <StoreProvider>
        <main style={{ width: '60%', margin: '0 auto' }}>
          <h1>TODO LIST</h1>
          <Button
            onClick={() => toggleModal(true)}
            size="large"
            style={{ marginBottom: '16px' }}
          >
            ADD TODO
          </Button>
          <List />
          <TodoForm isModalShow={isModalShow} onCancel={() => toggleModal(false)} />
        </main>
      </StoreProvider>
    </div>
  );
}

export default App;
