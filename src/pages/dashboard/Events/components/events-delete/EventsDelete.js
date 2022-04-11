import {Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai';

function EventsDelete() {
  return (
    <Button type='link' danger>
      <AiOutlineDelete style={{fontSize: '1.3em'}} />
    </Button>
  );
}

export default EventsDelete;
