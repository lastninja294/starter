import React, {useState,useEffect} from 'react';
import {Table, Space} from 'antd';
import SurgeryDelate from '../Surgery-delate/SurgeryDelate';
import SurgeryEdit from '../Surgery-edit/SurgeryEdit';
import SurgeryImages from '../Surgery-image/SurgeryImage';
import SurgeryVideo from '../Surgery-video/SurgeryVideo';
import { fakeData } from '../../Fake-data/fake-data';

const columns = [
    {title: 'Id', width: 50, dataIndex: 'id', key: 'id'},
    {title: 'Title', dataIndex: 'title', key: 'title'},
    {title: 'Description', dataIndex: 'description', key: 'description',
    render: desc => (
        <>
            <p>{desc.slice(0,34) + "..."}</p>
        </>
    )
},
    {title: 'Date', dataIndex: "date", key:'date'},
    {
      title: 'Actions',
      dataIndex: '',
      key: 'id',
      render: (item) => (
        <>
          <SurgeryImages item={item} />
          <SurgeryVideo item={item} />
          <SurgeryEdit item={item} />
          <SurgeryDelate item={item} />
        </>
      ),
    },
];

const SurgeryTable = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setData(fakeData);
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
          pagination={{pageSize:4}}
        />
      </Space>
    );
  };

  export default SurgeryTable;