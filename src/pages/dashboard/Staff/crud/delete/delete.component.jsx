import {Button, Popconfirm} from 'antd';
import {useDeleteData} from '../../api/apiFunction';
import {AiOutlineDelete} from 'react-icons/ai';
import React from 'react';

const Delete = ({id}) => {
  const {mutate, isLoading} = useDeleteData();
  return (
    <Popconfirm title='delete ?' onConfirm={() => mutate(id)}>
      <Button
        size='large'
        style={{padding: '0'}}
        icon={<AiOutlineDelete size={'20px'} />}
        type='link'
        danger
        loading={isLoading}></Button>
    </Popconfirm>
  );
};
export default Delete;
