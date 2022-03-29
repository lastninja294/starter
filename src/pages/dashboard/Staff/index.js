import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import Create from './crud/create/create-data.component';
import TableComponent from './crud/table/table.component';

const Staff = () => {
  return (
    <div className='container-data'>
      <AppPageMetadata title='Staff' />
      <Create />
      <TableComponent />
    </div>
  );
};

export default Staff;
