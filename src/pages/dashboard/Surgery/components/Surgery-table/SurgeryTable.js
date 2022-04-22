import React,{useState, useEffect} from 'react';
import {Table, Space} from 'antd';
import SurgeryDelate from '../Surgery-delate/SurgeryDelate';
import SurgeryEdit from '../Surgery-edit/SurgeryEdit';
import SurgeryImages from '../Surgery-image/SurgeryImage';
import SurgeryVideo from '../Surgery-video/SurgeryVideo';
import { fakeData } from '../../Fake-data/fake-data';
// import axios from 'axios'


const columns = [
    {title: 'Id', width: '10%', dataIndex: 'id', key: 'id', ellipsis: true},
    {title: 'Title', dataIndex: 'title', key: 'title', ellipsis:true},
    {title: 'Description', dataIndex: 'description', key: 'description', ellipsis: true, width:'40%'
},
    {title: 'Date', dataIndex: "date", key:'date'},
    {
      title: 'Actions',
      dataIndex: '',
      key: 'id',
      width:'24%',
      
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
          rowKey='id'
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={{pageSize:4}}
        />
        {/* <button onClick={getaxios}>Click me</button> */}
      </Space>
    );
  };

  export default SurgeryTable;