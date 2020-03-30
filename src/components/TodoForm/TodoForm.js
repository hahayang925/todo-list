import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Modal, DatePicker } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const dateFormat = 'YYYY-MM-DD';
const defaultTodo = { content: '', date: new Date(), status: 'undone', id: null, validDate: moment(new Date(), dateFormat) };

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: defaultTodo,
    };
    this.sendData = this.sendData.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.sendData);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.sendData);
  }

  onValuesChange(change, all) {
    console.log('onValuesChange', all);
    const { todo } = this.state;
    const { validDate, content } = all;
    const data = {
      content,
      date: new Date().getTime(),
      validDate: validDate.toDate().getTime(),
      status: todo.status || 'undone',
      id: todo.id || uuidv4(),
    };
    this.setState({ todo: data });
  }

  sendData(e) {
    console.log('inside sendData');
    console.log({'content': this.state.todo.content});
    if (e.code === 'Enter' && this.state.todo.content) {
      console.log('inside componentdidmount with enter keydown');
      this.addTodo();
    }
  }

  addTodo() {
    const { id, onCancel } = this.props;
    const { todo } = this.state;
    console.log('addTodo', todo);
    if (id) {
      this.store.editTodo(id, todo);
    } else {
      this.store.addTodo(todo);
      this.setState({ todo: defaultTodo });
    }
    onCancel();
  }

  render() {
    const { isModalShow, onCancel, title } = this.props;
    const { todo } = this.state;
    return (
      <Modal visible={isModalShow} onCancel={onCancel} onOk={this.addTodo} title={title}>
        <Form {...layout} name="basic" initialValues={todo} onSubmit={this.addTodo} onValuesChange={this.onValuesChange}>
          <Form.Item label="Todo" name="content" rules={[{ required: true, message: 'Please input your todo content!' }]}>
            <Input placeholder="todos..." value={todo.content} style={{ width: '80%' }} />
          </Form.Item>

          <Form.Item label="Valid Date" name="validDate">
            <DatePicker defaultValue={moment(new Date(), dateFormat)} format={dateFormat} />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

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
