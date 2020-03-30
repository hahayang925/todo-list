import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useObserver } from 'mobx-react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Form, Input, Modal, DatePicker } from 'antd';
import { useStore } from '../../hooks';

const TodoForm = ({ isModalShow, onCancel, title, id }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const dateFormat = 'YYYY-MM-DD';
  const defaultTodo = { content: '', date: new Date(), status: 'undone', id: null, validDate: moment(new Date(), dateFormat) };
  const store = useStore();
  const [todo, setTodo] = useState(defaultTodo);

  const addTodo = () => {
    if (id) {
      store.editTodo(id, todo);
    } else {
      store.addTodo(todo);
      setTodo(defaultTodo);
    }
    onCancel();
  };

  const onValuesChange = (change, all) => {
    const { validDate, content } = all;
    const data = {
      content,
      date: new Date().getTime(),
      validDate: validDate.toDate().getTime(),
      status: todo.status || 'undone',
      id: todo.id || uuidv4(),
    };
    setTodo(data);
  };

  useEffect(() => {
    const sendData = (e) => {
      // debugger;
      if (e.code === 'Enter' && todo.content) {
        addTodo();
      }
    };
    window.addEventListener('keydown', sendData);
    if (id) {
      const currTodo = store.todos.find((el) => el.id === id);
      setTodo({
        ...currTodo,
        validDate: moment(new Date(currTodo.validDate)),
      });
    }
    return () => window.removeEventListener('keydown', sendData);
  }, [store.todos, id, todo.content]);

  return useObserver(() => (
    <Modal visible={isModalShow} onCancel={onCancel} onOk={addTodo} title={title}>
      <Form
        {...layout}
        name="basic"
        initialValues={todo}
        onSubmit={addTodo}
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="Todo"
          name="content"
          rules={[{ required: true, message: 'Please input your todo content!' }]}
        >
          <Input placeholder="todos..." value={todo.content} style={{ width: '80%' }} />
        </Form.Item>

        <Form.Item label="Valid Date" name="validDate">
          <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} />
        </Form.Item>
      </Form>
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
