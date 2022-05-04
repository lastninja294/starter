import React from 'react';
import {Popconfirm, message, Button} from 'antd';
import PropTypes from 'prop-types';
import {
  AiOutlineDelete
} from 'react-icons/ai';
import { deleteNews } from 'hooks';

const Delete = ({id , refetch}) => {
  const {mutateAsync} = deleteNews(id)
  const confirm =()=> {
    mutateAsync()
      .then(() => {
        message.success('Click on Yes');
        refetch()
      })
      .catch((err) => {
        message.error('failure delete  ', err.message);
        
      });
  }

  const cancel=()=> {
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
  refetch: PropTypes.func
};