import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
// import Create from './crud/create/create-data.component';
import Create from './crud/create/new-create-data.component';
import NewTableComponent from './crud/table/new.table.component';
import {QueryClientProvider, QueryClient} from 'react-query';
const queryClient = new QueryClient();
const Staff = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppPageMetadata title='Staff' />
      <Create />
      {/* <TableComponent
    staffData={staffData}
    handleDelete={handleDelete}s
    fetchData={fetchData}
  /> */}
      <NewTableComponent />
    </QueryClientProvider>
  );
};

export default Staff;
