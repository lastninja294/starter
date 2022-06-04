import React, {useState} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import EventsTable from './components/events-table/EventsTable';
import EventCreate from './components/events-create/EventsCreate';
import {Space} from 'antd';

const Events = () => {
  return (
    <>
        <AppPageMetadata title='Events' />
        <Space direction='vertical'>
          <EventCreate />
          <EventsTable />
        </Space>
    </>
  );
};

export default Events;
