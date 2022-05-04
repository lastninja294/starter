import React, {useEffect, useState} from 'react';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {getAllNews} from 'hooks';
import ApplicationTable from './components/table/table';
import { useHistory } from 'react-router-dom';
import Error404 from 'pages/errorPages/Error404';

const ApplicationPage = () => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const page = params.get('page');
    const size = params.get('size');
    const [users, setUsers] = useState([]);
  const {isLoading, data, isError, refetch, error} = getAllNews({
    page,
    size,
  });
  console.warn(error);
  useEffect(()=>{
    setUsers(data? data?.data: [])
  },[data])
    if (isError) return <Error404 />;

  return (
    <>
      <AppPageMetadata title='Application'>
        <ApplicationTable
          users={users}
          refetch={refetch}
          isLoading={isLoading}
        />
      </AppPageMetadata>
    </>
  );
};

export default ApplicationPage;
