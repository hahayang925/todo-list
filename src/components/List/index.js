import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { Row, Col, Typography } from 'antd';
import TodoListContext from '../../store/TodoListContext';
import ListItem from '../ListItem';

const List = () => {
  const context = useContext(TodoListContext);

  return useObserver(() => (
    <>
      <Row gutter="24" align="center" style={{ marginBottom: '16px' }}>
        <Col span={2} align="center">
          <Typography.Text>Status</Typography.Text>
        </Col>
        <Col align="center" span={10}>
          <Typography.Text>Content</Typography.Text>
        </Col>
        <Col span={6}>
          <Typography.Text>Last Modified</Typography.Text>
        </Col>
        <Col span={6}>
          <Typography.Text>Action</Typography.Text>
        </Col>
      </Row>
      {context.todos.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          onChange={context.changeStatus}
          deleteTodo={context.deleteTodo}
        />
      ))}
    </>
  ));
};

List.propTypes = {};

export default List;
