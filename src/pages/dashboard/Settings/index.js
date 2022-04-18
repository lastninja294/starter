import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {QueryClientProvider, QueryClient} from 'react-query';
import TableComponent from './Table/Table';
import {useHistory} from 'react-router-dom';
import {Space} from 'antd';
import CreateModal from './Table/Create';

// create the query client
const queryClient = new QueryClient();

const Settings = () => {
  // define the history object, because we need to define the page number and page size in the url

  const history = useHistory();

  // define the search query
  const params = new URLSearchParams(history.location.search);

  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const page = params.get('page');
  // const size = params.get('size');

  // url for the query
  const url = `https://swapi.dev/api/people/?page=${page}`;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppPageMetadata title='Settings' />
        <Space direction='vertical'>
          <Space
            direction='horizontal'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <h2>Settings Page</h2>
            <CreateModal />
          </Space>
          <TableComponent url={url} />
        </Space>
      </QueryClientProvider>
    </>
  );
};

export default Settings;
