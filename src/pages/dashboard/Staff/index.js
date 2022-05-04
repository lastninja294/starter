import React from 'react';
import StaffPage from './staffPage';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Staff = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StaffPage />
    </QueryClientProvider>
  );
};

export default Staff;
