import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import Create from './crud/create/new-create-data.component';
import NewTableComponent from './crud/table/new.table.component';
const StaffPage = () => {
  console.log('render - index');
  return (
    <>
      <AppPageMetadata title='Staff' />
      <Create />
      <NewTableComponent />
    </>
  );
};

export default StaffPage;
