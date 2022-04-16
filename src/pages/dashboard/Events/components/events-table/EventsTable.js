import React, {useState, useEffect} from 'react';
import {FaceData} from '../../fake-data/fake-data';
// ant
import {Space, Table} from 'antd';
// events btn
import EventDelete from '../events-delete/EventsDelete';
import EventsEdit from '../events-edit/EventsEdit';
import EventsImage from '../events-image/EventsImage';
import EventsVideo from '../events-video/EventsVideo';

const columns = [
  {title: 'Id', width: 50, dataIndex: 'key', key: 'key'},
  {
    title: 'Title',
    dataIndex: 'title',
    width: '25%',
    key: 'title',
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: '50%',
    key: 'description',
    ellipsis: true,
  },
  {
    title: '',
    dataIndex: '',
    width: '20%',
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
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  // fake-asinc
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setdata(FaceData);
      setloading(false);
    }, 1000);
  }, []);

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{pageSize: 5}}
        bordered={true}
        loading={loading}
      />
    </Space>
  );
};

export default EventTable;
