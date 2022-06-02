import React from 'react';
import {Table} from 'antd';
import {useHistory} from 'react-router-dom';
import QueryPagination from 'pages/Pagination';

import {columns} from './table-columns'

function CertificatesTable({loading, data, dataCount}) {
  const history = useHistory();
  
  
  return (
    <>
      <Table
        rowKey='id'
        columns={columns}
        loading={loading}
        dataSource={data}
        pagination={false}
      />
      <QueryPagination pageName='certificates' countPage={dataCount} />
    </>
  );
}

export default CertificatesTable;
