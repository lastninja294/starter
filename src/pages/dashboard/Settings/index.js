import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {QueryClientProvider, QueryClient} from 'react-query';
import TableComponent from './Table/Table';
import {Space} from 'antd';
import CreateModal from './Table/Create';

// create the query client
const queryClient = new QueryClient();

const Settings = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppPageMetadata title='Settings' />
        <Space direction='vertical'>
          <CreateModal />
          <TableComponent />
        </Space>
      </QueryClientProvider>
    </>
  );
};

export default Settings;
