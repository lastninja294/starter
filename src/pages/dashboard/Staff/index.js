import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import Create from './crud/create/create-data.component';
import TableComponent from './crud/table/table.component';
// import {Switch, Route} from 'react-router-dom';
// import Edit from './crud/edit/edit.component';

const Staff = () => {
  return (
    <div className='container-data'>
      <AppPageMetadata title='Staff' />
      {/* <CreateData /> */}
      {/* <Switch>
        <Route path='/' component={TableComponent} />
        <Route path='/dashboard/staff/edit' component={Edit} />
      </Switch> */}
      <TableComponent />
      <Create />
    </div>
  );
};

export default Staff;
