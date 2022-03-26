import React, {useState, useEffect} from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import ShowIamges from '../show-image/show-image';
import ShowVideos from '../show-video/show-video';
import {FaRegEdit} from 'react-icons/fa';
import {Button} from 'antd';
import {Table} from 'antd';
import {api} from '../api';
const TableComponent = () => {
  const [staffData, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await api.get('/');
      console.log(request.data);
      setData(request.data);
      console.log('ishla');
      return request;
    }
    fetchData();
    // api
    //   .get('/')
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));
    // console.log('ishla');
  }, []);
  console.log(staffData);
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
      render: () => (
        <Button type='primary' shape='round' size={'middle'}>
          <FaRegEdit size={'20px'} />
        </Button>
      ),
    },
    {
      title: 'DELETE',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: () => (
        <a>
          <Button type='primary' shape='round' size={'middle'}>
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
        columns={columns}
        dataSource={staffData}
        scroll={{x: 1500, y: 500}}
      />
    </div>
  );
};

export default TableComponent;
