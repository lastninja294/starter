import {Space, Button, Popconfirm, message} from 'antd';
import {useQueryClient} from 'react-query';
import useDeleteData from 'pages/Pagination/useDeleteData';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {useMemo} from 'react';

const TableActions = ({id}) => {
  const queryClient = useQueryClient();
  const {mutateAsync, isLoading, isSuccess, isError} = useDeleteData(
    'hospitals',
    `https://axiosuchunsinovapi.herokuapp.com/hospitals/${id}`,
  );

  function showSuccessMessage(isSuccess, isError) {
    if (isSuccess) {
      message.success('Item deleted successfully. Good job!');
      // <refresh all data>
      queryClient.invalidateQueries('hospitals');
    }
    if (isError) {
      message.error('Error deleting item. Try again later');
    }
  }

  useMemo(() => {
    showSuccessMessage(isSuccess, isError);
  }, [isSuccess, isError]);
  return (
    <Space size='middle'>
      <Button type='link'>
        <AiOutlineEdit style={{fontSize: '1.3em'}} />
      </Button>
      <Popconfirm
        title='Are you sure you want to delete this item?'
        style={{width: '10px'}}
        okText='Yes'
        cancelText='No'
        onConfirm={mutateAsync}
        placement='topRight'>
        <Button
          type='link'
          danger
          disabled={isLoading}
          onClick={() => {
            console.log(id);
          }}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </Space>
  );
};

export default TableActions;
