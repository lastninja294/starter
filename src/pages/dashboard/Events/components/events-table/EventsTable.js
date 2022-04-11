import React, {useState, useEffect} from 'react';
import {Space, Table} from 'antd';
import {FaceData} from '../../face-data/face-data';
// events btn
import EventDelete from '../events-delete/EventsDelete';
import EventsEdit from '../events-edit/EventsEdit';
import EventsImage from '../events-image/EventsImage';
import EventsVideo from '../events-video/EventsVideo';

const columns = [
  {title: 'Id', width: 50, dataIndex: 'key', key: 'key'},
  {title: 'Title', dataIndex: 'title', key: 'title'},
  {title: 'Description', dataIndex: 'description', key: 'description'},
  {
    title: 'Action',
    dataIndex: '',
    key: 'key',
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
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // face asinc
    setData(FaceData);
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, []);

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{pageSize: 5}}
      />
    </Space>
  );
};

export default EventTable;
