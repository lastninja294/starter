import React, {useEffect, useState} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateData from './crud/create/create-data.component';
import {api} from './crud/api';

const Staff = () => {
  const [staffData, setData] = useState([]);
  useEffect(() => {
    api
      .get('/')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(staffData);
  return (
    <Router>
      <Route exact path='/dashboard/staff/create' component={CreateData} />
      <div className='container-data'>
        <AppPageMetadata title='Staff' />
        <div className='row'>
          {staffData.map((item) => (
            <div className='column' key={item.id}>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <Link to='/dashboard/staff/create'>
          <button>create</button>
        </Link>
      </div>
    </Router>
  );
};

export default Staff;
