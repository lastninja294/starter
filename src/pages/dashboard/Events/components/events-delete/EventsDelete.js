import React, {useContext, useEffect} from 'react';
import {Popconfirm, Button, message} from 'antd';
// import useDeleteData from 'pages/Pagination/useDeleteData';
import {AiOutlineDelete} from 'react-icons/ai';
import {useMutation, useQueryClient} from 'react-query';
import isLoadingContext from '../../myContext/myContext';
import axios from 'axios';

function EventsDelete({item}) {
  const [, setloader] = useContext(isLoadingContext);
  const queryClient = useQueryClient();



  // <delete data>
  // const {mutateAsync, isLoading, isSuccess, isError} = useDeleteData(
  //   `https://axiosuchunsinovapi.herokuapp.com/users/${item.id}`,
  // );

  const {mutateAsync, isLoading} = useMutation(
    async () => {
      const response = await axios.delete(`https://axiosuchunsinovapi.herokuapp.com/users/${item.id}`);
      return response.data;
    },
    {
      onSuccess: () => {
        message.success("muvaffaqiyatli o'chirildi !");
        // <refresh all data>
        queryClient.invalidateQueries();
        // </refresh all data>
      },
      onError: () => {
        message.error('nimadir neto');
      },
    },
  );
  // < /delete data>

  useEffect(() => {
    setloader(isLoading);
  }, [isLoading]);

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

export default EventsDelete;
