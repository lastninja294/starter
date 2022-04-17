import React from 'react';
import {Skeleton, Table} from 'antd';
import PropTypes from 'prop-types';

function ApplicationTable({users}) {
    const users1 = users? users : []
  const columns = [
    {
      title: 'ID',
      width: 50,
      dataIndex: 'id',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'F I SH *',
      width: 220,
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
    },
    {
      title: 'BANISA NOMI',
      width: 220,
      dataIndex: 'medName',
      key: 'email',
      fixed: 'left',
    },
    {
      title: 'EMAIL',
      key: 'email',
      fixed: 'right',
      width: 150,
      dataIndex: 'email',
    },
    {
      title: 'PHONE',
      key: 'phone',
      fixed: 'right',
      dataIndex: 'phone',
      width: 150,
    },
  ];

  return (
    <Skeleton active loading={false} paragraph={{rows: 20}}>
      <Table rowKey='id' columns={columns} dataSource={[...users1]} />;
    </Skeleton>
  );
}

export default ApplicationTable;

ApplicationTable.propTypes = {
  users: PropTypes.array,
};
