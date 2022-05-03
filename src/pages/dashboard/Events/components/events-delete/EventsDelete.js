import React, {useContext, useEffect, memo} from 'react';
import {Popconfirm, Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';
import isLoadingContext from '../../myContext/myContext';
import {useMutation, useQueryClient} from 'react-query';
import {message} from 'antd';
import axios from 'axios';

function EventsDelete({item}) {
  const [, setloader] = useContext(isLoadingContext);
  const queryClient = useQueryClient();

  const {mutateAsync, isLoading, isSuccess} = useMutation(
    async () =>
      await axios.delete(
        `https://axiosuchunsinovapi.herokuapp.com/staff/${item.id}`,
      ),
    {
      onSuccess: () => {
        message.success("muvaffaqiyatli o'chirildi !");
        // <refresh all data>
        queryClient.invalidateQueries('event');
        // </refresh all data>
      },
      onError: () => {
        message.error('nimadir xato !');
      },
    },
  );
  // < /delete data>

  useEffect(() => {
    setloader(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setloader(isSuccess);
  }, [isSuccess]);

  return (
    <>
      <Popconfirm
        title='Sure to delete?'
        placement='topRight'
        onConfirm={() => {
          mutateAsync();
        }}>
        <Button type='link' danger style={{padding: 0, margin: '0 1em'}}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </>
  );
}

export default memo(EventsDelete);
