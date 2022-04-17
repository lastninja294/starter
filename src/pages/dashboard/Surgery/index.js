import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import SurgeryTable from './components/Surgery-table/SurgeryTable';

const Surgery = () => {
  return (
    <>
      <AppPageMetadata title='Surgery' />
      <h2>Surgery Page</h2>
      <p>You can kick start your app</p>
      <SurgeryTable />
    </>
  );
};

export default Surgery;
