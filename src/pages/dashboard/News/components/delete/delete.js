import React from 'react';
import {Popconfirm, message, Button} from 'antd';
import PropTypes from 'prop-types';
import {
  AiOutlineDelete
} from 'react-icons/ai';

const Delete = ({id}) => {
  function confirm(e) {
    console.log(e);
    alert(id + 'uchirishga ruxsat berildi');
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    alert(id + 'uchirishga ruxsat berilmadi');
    message.error('Click on No');
  }
  return (
    <Popconfirm
      title='Voy rostanmii ?'
      onConfirm={confirm}
      onCancel={cancel}
      okText='Yes'
      cancelText='No'>
      <Button type='link' danger>
        <AiOutlineDelete style={{fontSize: '1.3em'}} />
      </Button>
    </Popconfirm>
  );
};

export default Delete;
Delete.propTypes = {
  id: PropTypes.number,
};