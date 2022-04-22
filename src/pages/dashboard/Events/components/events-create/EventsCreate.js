import React, {useState} from 'react';
import {Button} from 'antd';
import EventCreateForm from './EventCreateForm';

function EventCreate() {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type='primary'
        style={{ margin:'1em 0'}}
        onClick={() => {
          setVisible(true);
        }}>
        Create
      </Button>
      <EventCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default EventCreate;
