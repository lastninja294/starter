import {Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';

function EventsDelete() {
  return (
    <Button type='link' danger style={{padding: 0, margin: '0 15px'}}>
      <AiOutlineDelete style={{fontSize: '1.3em'}} />
    </Button>
  );
}

export default EventsDelete;
