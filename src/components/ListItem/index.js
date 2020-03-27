import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Row, Col, Checkbox, Button, Typography } from 'antd';
import { useModal, useStore } from '../../hooks';
import TodoForm from '../TodoForm';

const TextCol = styled(Col)`{
  display: flex;
  align-items: center;
}`;

const ActionButton = styled(Button)`{
  width: 48%;
}`;

const ListItem = ({ todo: { content, date, status, id }, onChange }) => {
  const store = useStore();
  const Modal = useModal();
  // const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      <Row gutter="24" align="center" style={{ marginBottom: '10px' }}>
        <TextCol span={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox checked={status === 'done'} onChange={() => onChange(id)} />
        </TextCol>
        <TextCol
          align="center"
          span={10}
          style={{ justifyContent: 'center' }}
        >
          <Typography.Text delete={status === 'done'}>{content}</Typography.Text>
        </TextCol>
        <TextCol span={6} style={{ justifyContent: 'center' }}>
          <Typography.Text>{dayjs(date).format('YYYY-MM-DD HH:mm')}</Typography.Text>
        </TextCol>
        <TextCol span={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ActionButton type="primary" onClick={Modal.openModal}>Edit</ActionButton>
          <ActionButton danger onClick={() => store.deleteTodo(id)}>Delete</ActionButton>
        </TextCol>
      </Row>
      <TodoForm
        key={Math.random()}
        isModalShow={Modal.visible}
        onCancel={Modal.closeModal}
        id={id}
        title="Edit Todo"
      />
    </>
  );
};

ListItem.propTypes = {
  todo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  // deleteTodo: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  todo: {},
};

export default ListItem;
