import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
// import Create from './crud/create/create-data.component';
import Create from './crud/create/new-create-data.component';
import NewTableComponent from './crud/table/new.table.component';
import React, {useEffect, useState} from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {api} from './crud/api';
const queryClient = new QueryClient();
const Staff = () => {
  // console.log('render INDEX staff');
  const [staffData, setStaffData] = useState([]);
  const fetchData = async () => {
    try {
      const request = await api.get('/');
      console.log(request.data);
      setStaffData(request.data);
      // console.log('render API');
      return request;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`Error: ${error}`);
      }
    }
  };
  console.log(staffData);
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchData();
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <AppPageMetadata title='Staff' />
      <Create />
      {/* <TableComponent
        staffData={staffData}
        handleDelete={handleDelete}s
        fetchData={fetchData}
      /> */}
      <NewTableComponent
        //staffData={staffData}
        handleDelete={handleDelete}
        fetchData={fetchData}
      />
    </QueryClientProvider>
  );
};

export default Staff;
