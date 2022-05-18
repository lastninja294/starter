import React, {useState} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import EventsTable from './components/events-table/EventsTable';
import isLoadingContext from './myContext/myContext';
import EventCreate from './components/events-create/EventsCreate';


const Events = () => {
  const [loader, setloader] = useState(false);

  return (
    <>
      <isLoadingContext.Provider value={[loader, setloader]}>
          <AppPageMetadata title='Events' />
          <EventCreate />
          <EventsTable />
      </isLoadingContext.Provider>
    </>
  );
};

export default Events;
