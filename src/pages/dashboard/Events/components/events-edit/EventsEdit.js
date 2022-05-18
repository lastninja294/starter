import {Button, message} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';
import React, {memo} from 'react';

function EventsEdit() {
  return (
    <>
      <Button
        type='link'
        style={{padding: 0, margin: '0 .5em'}}
        // onClick => bu shunchaki namuna message.success
        onClick={() => {
          message.success('This is an success message');
        }}>
        <AiOutlineEdit style={{fontSize: '1.3em'}} />
      </Button>
    </>
  );
}

export default memo(EventsEdit);
