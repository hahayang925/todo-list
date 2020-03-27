import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import { Row, Col, Typography } from 'antd';

import { useStore } from '../hooks';

const ItemWrapper = styled.div`{
  text-align: center;
  margin-top: 20px;
}`;

function DondeTodo() {
  const store = useStore();

  // useEffect(() => {
  //   const doneTodos = store.todos.filter((todo) => todo.status === 'done');
  //   setTodosDone(doneTodos);
  // }, [store.todos]);

  return useObserver(() => (
    <ItemWrapper className="App" style={{ margin: '0 auto' }}>
      <Typography.Title>Done</Typography.Title>
      {store.todosDone.length ? (
        store.todosDone.map((todo) => {
          return (
            <Row key={todo.id} justify="center" gutter={16}>
              <Col col={6}>
                <Typography.Text>{dayjs(todo.date).format('YYYY-MM-DD HH:mm')}</Typography.Text>
              </Col>
              <Col col={10}>
                <Typography.Text>{todo.content}</Typography.Text>
              </Col>
            </Row>
          );
        })
      ) : <Typography.Title level={4}>Nothing is done...</Typography.Title>}
    </ItemWrapper>
  ));
}

export default DondeTodo;
