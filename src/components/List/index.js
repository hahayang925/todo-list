import React from 'react';
import { useObserver } from 'mobx-react';
import { Row, Col, Typography } from 'antd';
import { useStore } from '../../hooks';
import ListItem from '../ListItem';

const List = () => {
  const store = useStore();

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
        />
      ))}
    </>
  ));
};

List.propTypes = {};

export default List;
