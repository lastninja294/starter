import React from 'react';
import {Popconfirm, message, Button} from 'antd';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import { deleteNews } from 'hooks';

const DeleteApplicaton = ({id, refetch}) => {
  const nn = deleteNews(id);
  console.log(nn);
  const {mutateAsync, isLoading} = nn;
  const confirm = () => {
    mutateAsync()
      .then(() => {
        message.success('Click on Yes');
        refetch();
      })
      .catch((err) => {
        message.error('failure delete  ', err.message);
      });
  };

  const cancel = () => {
    message.error('Click on No');
  };
  return (
    <Popconfirm
      title='Voy rostanmii ?'
      onConfirm={confirm}
      onCancel={cancel}
      okText='Yes'
      cancelText='No'>
      <Button type='link' loading={isLoading} danger>
        <AiOutlineDelete style={{fontSize: '1.3em'}} />
      </Button>
    </Popconfirm>
  );
};

export default DeleteApplicaton;
DeleteApplicaton.propTypes = {
  id: PropTypes.number,
  refetch: PropTypes.func,
};
