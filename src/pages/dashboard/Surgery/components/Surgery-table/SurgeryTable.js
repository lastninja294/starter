import React from 'react';
import {Table, Space} from 'antd';
import SurgeryDelate from '../Surgery-delate/SurgeryDelate';
import SurgeryEdit from '../Surgery-edit/SurgeryEdit';
import SurgeryImages from '../Surgery-image/SurgeryImage';
import SurgeryVideo from '../Surgery-video/SurgeryVideo';
import useGetData from 'pages/Pagination/useData';
import Error404 from 'pages/errorPages/Error404';
// import {fakeData} from '../../Fake-data/fake-data';

const columns = [
  {title: 'Id', width: '6%', dataIndex: 'id', key: 'id', ellipsis: true},
  {
    title: 'Title',
    width: '15%',
    dataIndex: '',
    key: 'title_uz',
    ellipsis: true,
    render:(item) => item?.title?.uz,
  },
  {
    title: 'Description',
    dataIndex: '',
    key: 'description_uz',
    ellipsis: true,
    width: '45%',
    render: (item) => item?.description?.uz,
  },
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


const SurgeryTable = () => {
  const {data, status} = useGetData('surgery', 'https://axiosuchunsinovapi.herokuapp.com/staff');

  if (status === 'error') {
    <Error404 />;
  }


  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        loading={status === 'loading'}
        pagination={{pageSize: 4}}
      />
    </Space>
  );
};

export default SurgeryTable;
