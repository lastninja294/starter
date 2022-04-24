import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import SurgeryTable from './components/Surgery-table/SurgeryTable';
import { QueryClientProvider, QueryClient } from 'react-query';


const queryClient = new QueryClient();

const Surgery = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AppPageMetadata title='Surgery' />
      <h2>Surgery Page</h2> 
      <SurgeryTable />
    </QueryClientProvider>
    </>
  );
};

export default Surgery;
