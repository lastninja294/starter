import {Button} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';

function EventsEdit() {
  return (
    <Button type='link' style={{padding: 0, margin: '0 15px'}}>
      <AiOutlineEdit style={{fontSize: '1.3em'}} />
    </Button>
  );
}

export default EventsEdit;
