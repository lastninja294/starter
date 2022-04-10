import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import EventsTable from './components/events-table/EventsTable';

const Surgery = () => {
  return (
    <>
      <AppPageMetadata title='Events' />
      <h2>Events Page</h2>
      <EventsTable />
    </>
  );
};

export default Surgery;
