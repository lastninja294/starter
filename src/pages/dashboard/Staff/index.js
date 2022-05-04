import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
// import Create from './crud/create/create-data.component';
import Create from './crud/create/new-create-data.component';
import NewTableComponent from './crud/table/new.table.component';
import {QueryClientProvider, QueryClient} from 'react-query';
const queryClient = new QueryClient();
const Staff = () => {
  console.log('render - index');
  return (
    <QueryClientProvider client={queryClient}>
      <AppPageMetadata title='Staff' />
      <Create />
      <NewTableComponent />
    </QueryClientProvider>
  );
};

export default Staff;
