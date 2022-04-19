import React, {useContext, useEffect} from 'react';
import {Popconfirm, Button} from 'antd';
import useDeleteData from 'pages/Pagination/useDeleteData';
import {AiOutlineDelete} from 'react-icons/ai';
import {useMutation, useQueryClient} from 'react-query';
import isLoadingContext from '../../myContext/myContext';

function EventsDelete({item}) {

  const [, setloader] = useContext(isLoadingContext);

  // <refresh data>
  const queryClient = useQueryClient();

  const clearMutation = useMutation(
    () => fetch(`https://axiosuchunsinovapi.herokuapp.com/`),
    {
      onSettled: (data) => {
        queryClient.invalidateQueries(['event', data.id]);
      },
    },
  );

  // </refresh data>

  // <delete data>
  const {mutateAsync, isLoading, isSuccess, isError} = useDeleteData(
    `https://axiosuchunsinovapi.herokuapp.com/users/${item.id}`,
  );
  // < /delete data>


  useEffect(() => {
    setloader(isLoading);

  }, [isSuccess, isError, isLoading]);

  return (
    <>
      <Popconfirm
        title='Sure to delete?'
        placement='topRight'
        onConfirm={() => {
          mutateAsync();
          clearMutation.mutate();
        }}>
        <Button type='link' danger style={{padding: 0, margin: '0 15px'}}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </>
  );
}

export default EventsDelete;
