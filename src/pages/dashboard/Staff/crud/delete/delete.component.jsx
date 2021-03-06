import {Button, Popconfirm} from 'antd';
import {useDeleteData} from '../../api/apiFunction';
import {AiOutlineDelete} from 'react-icons/ai';
import React, {memo} from 'react';

const Delete = ({id}) => {
  const {mutateAsync, isLoading} = useDeleteData();
  console.log('render - delete');
  return (
    <Popconfirm title='delete ?' onConfirm={async () => await mutateAsync(id)}>
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
export default memo(Delete);
