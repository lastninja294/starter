import React, {useContext, useEffect} from 'react';
// ant
import {Space, Table} from 'antd';
// events btn
import EventDelete from '../events-delete/EventsDelete';
import EventsEdit from '../events-edit/EventsEdit';
import EventsImage from '../events-image/EventsImage';
import EventsVideo from '../events-video/EventsVideo';
import Error404 from 'pages/errorPages/Error404';
import useGetData from 'pages/Pagination/useData';
import isLoadingContext from '../../myContext/myContext';

const columns = [
  {
    title: 'Id',
    width: 60,
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    ellipsis: true,
  },
  {
    title: 'Title',
    dataIndex: 'name',
    width: '25%',
    key: 'title',
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'surname',
    width: '48%',
    key: 'description',
    ellipsis: true,
  },
  {
    title: '',
    dataIndex: '',
    align: 'center',
    render: (item) => (
      <>
<<<<<<< HEAD
        <div style={{margin: '0 auto'}}>
=======
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
>>>>>>> 0106f7c8782a531044ddfd97e8697d0c6014a9e8
          <EventsImage item={item} />
          <EventsVideo item={item} />
          <EventsEdit item={item} />
          <EventDelete item={item} />
        </div>
      </>
    ),
  },
];

const EventTable = () => {
  const [loader, setloader] = useContext(isLoadingContext);

  let pageParam = 1 , pageLimit=20;
  const {data, status} = useGetData(
    'event',
    `https://axiosuchunsinovapi.herokuapp.com/users?_page=${pageParam}&_limit=${pageLimit}`,
  );
  useEffect(() => {
    setloader(status === 'loading' ? true : false);
  }, [status]);

  if (status === 'error') {
    return <Error404 />;
  }
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        pagination={20}
        bordered={true}
        loading={loader}
      />
    </Space>
  );
};

export default EventTable;
