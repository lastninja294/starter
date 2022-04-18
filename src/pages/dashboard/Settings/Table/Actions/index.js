import {Space, Button, Popconfirm} from 'antd';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';


const TableActions = ({mutateAsync, isLoading}) => {
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
        <Button type='link' danger disabled={isLoading}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </Space>
  );
};

export default TableActions;
