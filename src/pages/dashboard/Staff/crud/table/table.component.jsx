import React from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import ShowIamges from '../show-image/show-image';
import {Table, Button, Skeleton} from 'antd';
import Edit from '../edit/edit.component';
import PropTypes from 'prop-types';
const TableComponent = ({staffData, handleDelete, fetchData}) => {
  // console.log('render Table');
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
      render: (record) => <ShowIamges data={staffData} id={record.id} />,
    },
    {
      title: 'EDIT',
      key: 'operation',
      fixed: 'right',
      width: 80,
      render: (record) => (
        <Edit id={record.id} fetchData={fetchData} data={staffData} />
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
      <Skeleton active loading={false} paragraph={{rows: 10}}>
        <Table
          rowKey='id'
          columns={columns}
          dataSource={[...staffData]}
          scroll={{x: 1500, y: 480}}
        />
      </Skeleton>
    </div>
  );
};

export default TableComponent;
TableComponent.propTypes = {
  staffData: PropTypes.array,
  handleDelete: PropTypes.func,
  fetchData: PropTypes.func,
};
