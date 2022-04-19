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
  {title: 'Id', width: 50, dataIndex: 'id', key: 'id'},
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
    width: '50%',
    key: 'description',
    ellipsis: true,
  },
  {
    title: '',
    dataIndex: '',
    width: '20%',
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

  console.log('table');
  const {data, status} = useGetData(
    'event',
    `https://axiosuchunsinovapi.herokuapp.com/users`,
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
