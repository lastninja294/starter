import React from 'react';
import {Table} from 'antd';
import PropTypes from 'prop-types';
import QueryPagination from 'pages/Pagination';
import {useIntl} from 'react-intl';
import DeleteApplicaton from './delete';

function ApplicationTable({users ,isLoading , refetch}) {
  const {messages} = useIntl();
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
      dataIndex: 'title',
      key: 'fullName',
      fixed: 'left',
      ellipsis: true,
      render: (title) => <>{title?.uz}</>,
    },
    {
      title: 'BANISA NOMI',
      width: 220,
      dataIndex: 'description',
      key: 'email',
      fixed: 'left',
      ellipsis: true,
      render: (des) => <>{des?.uz}</>,
    },
    {
      title: messages['common.email'],
      key: 'email',
      fixed: 'right',
      width: 150,
      dataIndex: 'email',
      ellipsis: true,
    },
    {
      title: messages['common.phone'],
      key: 'phone',
      fixed: 'right',
      dataIndex: 'phone',
      width: 150,
    },
    {
      title: messages['common.delete'],
      key: 'phone',
      fixed: 'right',
      dataIndex: 'id',
      width: 80,
      render: (id) => {
        return <DeleteApplicaton refetch={refetch} id={id} />;
      },
    },
  ];

  return (
    <>
      <Table rowKey='id' pagination={null} loading={isLoading} columns={columns} dataSource={[...users]} />
      <QueryPagination pageName='application' />
    </>
  );
}

export default ApplicationTable;

ApplicationTable.propTypes = {
  users: PropTypes.array,
  isLoading: PropTypes.bool,
  refetch: PropTypes.func
};
