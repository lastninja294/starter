import {Popconfirm, Button, message} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';

function EventsDelete() {
  return (
    <>
      <Popconfirm
        title='Sure to delete?'
        placement='topRight'
        // onConfirm => bu shunchaki namuna message.success
        onConfirm={() => message.success('This is an success message')}>
        <Button type='link' danger style={{padding: 0, margin: '0 15px'}}>
          <AiOutlineDelete style={{fontSize: '1.3em'}} />
        </Button>
      </Popconfirm>
    </>
  );
}

export default EventsDelete;
