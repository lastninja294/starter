import React from 'react';
import NewsPage from './newPage';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


const News = () => {
  return (
   <QueryClientProvider client={queryClient}>
     <NewsPage/>
    </QueryClientProvider>
     );
};

export default News;
