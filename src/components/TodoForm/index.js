import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useObserver } from 'mobx-react';
import PropTypes from 'prop-types';

import { Input, Col, Row, Modal } from 'antd';
import TodoListContext from '../../store/TodoListContext';

const TodoForm = ({ isModalShow, onCancel, title, id }) => {
  const defaultTodo = { content: '', date: new Date(), status: 'undone', id: null };
  const context = useContext(TodoListContext);
  const [todo, setTodo] = useState(defaultTodo);

  const onChange = (e) => {
    const data = {
      content: e.target.value,
      date: new Date().getTime(),
      status: todo.status || 'undone',
      id: todo.id || uuidv4(),
    };
    setTodo(data);
  };

  const addTodo = () => {
    if (id) {
      context.editTodo(id, todo);
    } else {
      context.addTodo(todo);
      setTodo(defaultTodo);
    }
    onCancel();
  };

  useEffect(() => {
    if (id) {
      const currTodo = context.todos.find((el) => el.id === id);
      setTodo({
        ...currTodo,
      });
    }
  }, [context.todos, id]);

  return useObserver(() => (
    <Modal visible={isModalShow} onCancel={onCancel} onOk={addTodo} title={title}>
      {/* change into form */}
      <Row justify="between" align="center" gutter="16">
        <Col span={12}>
          <Input placeholder="todos..." value={todo.content} onChange={onChange} onPressEnter={(e) => { e.stopPropagation(); addTodo(); }} />
        </Col>
      </Row>
    </Modal>
  ));
};

TodoForm.propTypes = {
  isModalShow: PropTypes.bool,
  onCancel: PropTypes.func,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

TodoForm.defaultProps = {
  isModalShow: false,
  title: 'Add Todo',
};

export default TodoForm;
