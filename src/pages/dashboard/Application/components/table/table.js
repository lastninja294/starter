import React from 'react';
import {Table} from 'antd';
import PropTypes from 'prop-types';
import QueryPagination from 'pages/Pagination';
import {useIntl} from 'react-intl';

function ApplicationTable({users}) {
  const {messages} = useIntl();
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
      title: messages['common.email'],
      key: 'email',
      fixed: 'right',
      width: 150,
      dataIndex: 'email',
    },
    {
      title: messages['common.phone'],
      key: 'phone',
      fixed: 'right',
      dataIndex: 'phone',
      width: 150,
    },
  ];

  return (
    <>
      <Table rowKey='id' columns={columns} dataSource={[...users1]} />
      <QueryPagination pageName='application' />
    </>
  );
}

export default ApplicationTable;

ApplicationTable.propTypes = {
  users: PropTypes.array,
};
