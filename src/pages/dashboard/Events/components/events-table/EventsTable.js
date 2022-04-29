import React, {useContext, useEffect, useState} from 'react';
import {Space, Table} from 'antd';
import EventDelete from '../events-delete/EventsDelete';
import EventsEdit from '../events-edit/EventsEdit';
import EventsImage from '../events-image/EventsImage';
import EventsVideo from '../events-video/EventsVideo';
import Error404 from 'pages/errorPages/Error404';
import isLoadingContext from '../../myContext/myContext';
import useGetData from 'pages/Pagination/useData';

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
    dataIndex: 'title_ru',
    width: '25%',
    key: 'title',
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'description_ru',
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
        <EventsImage item={item} />
        <EventsVideo item={item} />
        <EventsEdit item={item} />
        <EventDelete item={item} />
      </>
    ),
  },
];

const EventTable = () => {
  const [loader, setloader] = useContext(isLoadingContext);
  const [page] = useState(1);
  const [size] = useState(20);

  const {data, status} = useGetData(
    'event',
    `https://axiosuchunsinovapi.herokuapp.com/staff/?_page=${page}&_limit=${size}`,
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
        pagination={true}
        bordered={true}
        loading={loader}
      />
    </Space>
  );
};

export default EventTable;
