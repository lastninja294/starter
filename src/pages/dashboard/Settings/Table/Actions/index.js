import {Space, Button, Popconfirm, message} from 'antd';
import {useQueryClient} from 'react-query';
// import useDeleteData from 'pages/Pagination/useDeleteData';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {useMemo} from 'react';
import {deleteSettings} from 'hooks';

const TableActions = ({id, refetch}) => {
  const {mutateAsync, isError, isSuccess, isLoading} = deleteSettings(id);

  function showSuccessMessage(isSuccess, isError) {
    if (isSuccess) {
      message.success('Item deleted successfully. Good job!');
      // <refresh all data>
      refetch();
    }
    if (isError) {
      message.error('Error deleting item. Try again later');
    }
  }

  const Confirm = () => {
    mutateAsync()
      .then(() => {
        showSuccessMessage(true, false);
      })
      .catch((err) => {
        showSuccessMessage(false, true);
      });
  };
  useMemo((isSuccess, isError) => {
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
        onConfirm={Confirm}
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
