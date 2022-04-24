import React, {useState} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import EventsTable from './components/events-table/EventsTable';
import {QueryClient, QueryClientProvider} from 'react-query';
import isLoadingContext from './myContext/myContext';
import EventCreate from './components/events-create/EventsCreate';

const queryClient = new QueryClient();

const Events = () => {
  const [loader, setloader] = useState(false);

  return (
    <>
      <isLoadingContext.Provider value={[loader, setloader]}>
        <QueryClientProvider client={queryClient}>
          <AppPageMetadata title='Events' />
          <EventCreate/>
          <EventsTable />
        </QueryClientProvider>
      </isLoadingContext.Provider>
    </>
  );
};

export default Events;
