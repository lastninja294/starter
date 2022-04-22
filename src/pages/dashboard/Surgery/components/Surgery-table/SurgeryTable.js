import React, {useEffect, useState} from 'react';
import {Table, Space} from 'antd';
import SurgeryDelate from '../Surgery-delate/SurgeryDelate';
import SurgeryEdit from '../Surgery-edit/SurgeryEdit';
import SurgeryImages from '../Surgery-image/SurgeryImage';
import SurgeryVideo from '../Surgery-video/SurgeryVideo';
// import Error404 from 'pages/errorPages/Error404';
// import {fakeData} from '../../Fake-data/fake-data';
import axios from 'axios';

const columns = [
  {title: 'Id', width: '5%', dataIndex: 'id', key: 'id', ellipsis: true},
  {
    title: 'Title',
    width: '15%',
    dataIndex: 'title_uz',
    /*dataIndex: 'title' */
    key: 'title_uz',
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'description_uz',
    // dataIndex: 'description',

    key: 'description_uz',
    ellipsis: true,
    width: '45%',
  },
  // {title: 'Date', dataIndex: 'date', key: 'date'},
  {
    title: 'Actions',
    dataIndex: '',
    key: 'id',
    width: '20%',

    render: (item) => (
      <div>
        <SurgeryImages item={item} />
        <SurgeryVideo item={item} />
        <SurgeryEdit item={item} />
        <SurgeryDelate item={item} />
      </div>
    ),
  },
];

const api = axios.create({
  baseURL: 'https://axiosuchunsinovapi.herokuapp.com/staff',
});

const SurgeryTable = () => {
  const [base, setBase] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setBase(fakeData);
      setLoading(!loading);
    }, 1000);
  }, []);

  api.get('/').then((res) => setBase(res.data));

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={base}
        loading={loading}
        pagination={{pageSize: 4}}
      />
    </Space>
  );
};

export default SurgeryTable;
