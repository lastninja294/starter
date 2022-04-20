import React from 'react';
import {Table, Space} from 'antd';
import Edit from '../edit/edit.component';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import ShowIamges from '../show-image/show-image';
const NewTableComponent = ({staffData, handleDelete, fetchData}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'IMAGES',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <ShowIamges data={staffData} id={record.id} />
        </Space>
      ),
    },
    {
      title: 'ACTION',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <Edit id={record.id} fetchData={fetchData} data={staffData} />
          <AiOutlineDelete
            style={{fontSize: '1.3em'}}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  //   const data = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //       tags: ['nice', 'developer'],
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //       tags: ['loser'],
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //       tags: ['cool', 'teacher'],
  //     },
  //   ];
  return <Table rowKey={'id'} columns={columns} dataSource={staffData} />;
};
export default NewTableComponent;
NewTableComponent.propTypes = {
  staffData: PropTypes.array,
  handleDelete: PropTypes.func,
  fetchData: PropTypes.func,
};
