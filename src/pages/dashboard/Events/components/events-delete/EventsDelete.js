import React, {memo} from 'react';
import {Popconfirm, Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';
import {message} from 'antd';
import {deleteEvents} from 'hooks';

function EventsDelete({item, refetch}) {
  const {mutateAsync, isLoading} = deleteEvents(item.id);

  return (
    <>
      <Popconfirm
        title='Sure to delete?'
        placement='topRight'
        onConfirm={() => {
          mutateAsync()
            .then(() => {
              message.success("muvaffaqiyatli o'chirildi !");
              refetch();
            })
            .catch((error) => {
              message.error(error.message);
            });
        }}>
        <Button
          type='link'
          danger
          style={{padding: 0, margin: '0 .5em'}}
          loading={isLoading}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </>
  );
}

export default memo(EventsDelete);
