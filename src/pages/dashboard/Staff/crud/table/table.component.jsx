import React, {useState, useEffect} from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import ShowIamges from '../show-image/show-image';
import ShowVideos from '../show-video/show-video';
import {Button} from 'antd';
import {Table} from 'antd';
import {api} from '../api';
import Edit from '../edit/edit.component';
const TableComponent = () => {
  const [staffData, setData] = useState([]);
  const fetchData = async () => {
    const request = await api.get('/');
    setData(request.data);
    return request;
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchData();
  };

  const saveClickItemID = (id) => {
    localStorage.setItem('EditID', `${id}`);
  };
  const columns = [
    {
      title: 'ID',
      width: 50,
      dataIndex: 'id',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'TITLE',
      width: 250,
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: '1',
      width: 750,
    },
    {
      title: 'IMAGES',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: () => (
        <a>
          <Button type='primary' shape='round' size={'middle'}>
            <ShowIamges />
          </Button>
        </a>
      ),
    },
    {
      title: 'VIDEOS',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: () => (
        <Button type='primary' shape='round' size={'middle'}>
          <ShowVideos />
        </Button>
      ),
    },
    {
      title: 'EDIT',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: (record) => (
        <Button
          type='primary'
          shape='round'
          size={'middle'}
          onClick={() => saveClickItemID(record.id)}>
          <Edit />
        </Button>
      ),
    },
    {
      title: 'DELETE',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: (record) => (
        <a>
          <Button
            type='primary'
            shape='round'
            size={'middle'}
            danger
            onClick={() => handleDelete(record.id)}>
            <RiDeleteBin6Fill size={'20px'} />
          </Button>
        </a>
      ),
    },
  ];

  // const data = [];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     id: i,
  //     title: `Edrward ${i}`,
  //     description: `London Park no. ${i}`,
  //   });
  // }
  return (
    <div>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={[...staffData]}
        scroll={{x: 1500, y: 480}}
      />
    </div>
  );
};

export default TableComponent;
