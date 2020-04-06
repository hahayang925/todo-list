import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import { Row, Col, Typography } from 'antd';
import { useStore, useModal } from '../../hooks';
import ListItem from '../ListItem';
import TodoForm from '../TodoForm';

const List = () => {
  const store = useStore();
  const Modal = useModal();
  const [id, setId] = useState();

  const openModal = (i) => {
    setId(i);
    Modal.openModal();
  };

  return useObserver(() => (
    <>
      <Row gutter="24" align="center" style={{ marginBottom: '16px' }}>
        <Col span={2} align="center">
          <Typography.Text>Status</Typography.Text>
        </Col>
        <Col align="center" span={6}>
          <Typography.Text>Content</Typography.Text>
        </Col>
        <Col span={6}>
          <Typography.Text>Last Modified</Typography.Text>
        </Col>
        <Col span={6}>
          <Typography.Text>Valid</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>Action</Typography.Text>
        </Col>
      </Row>
      {store.todos.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          onChange={store.changeStatus}
          deleteTodo={store.deleteTodo}
          openModal={openModal}
        />
      ))}
      {
        Modal.visible && (
          <TodoForm
            key={Math.random()}
            isModalShow={Modal.visible}
            onCancel={Modal.closeModal}
            id={id}
            title="Edit Todo"
          />
        )
      }
    </>
  ));
};

List.propTypes = {};

export default List;
