import React from 'react';
import {posts} from './components/facedata';

import Create from './components/create/create';
import NewsTable from './components/table/table';
import AppPageMetadata from '@crema/core/AppPageMetadata';

import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

const News = () => {
    
  return (
    <QueryClientProvider client={queryClient}>
      <AppPageMetadata title='News'>
        <Create />
        <NewsTable posts={posts} />
      </AppPageMetadata>
    </QueryClientProvider>
  );
};

export default News;
