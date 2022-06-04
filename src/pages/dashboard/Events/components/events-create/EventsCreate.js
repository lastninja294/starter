import React, {useState} from 'react';
import {Button} from 'antd';
import EventsCreateForm from './EventsCreateForm';

function EventCreate() {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form:===== ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type='primary'
        onClick={() => {
          setVisible(true);
        }}>
        Create
      </Button>
      <EventsCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

export default EventCreate;
