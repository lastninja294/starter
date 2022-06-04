import React from 'react';
import {Table} from 'antd';
import QueryPagination from 'pages/Pagination';

import {columns} from './table-columns';

function CertificatesTable({loading, data, dataCount, refetch}) {
  return (
    <>
      <Table
        rowKey='id'
        columns={columns(refetch)}
        loading={loading}
        dataSource={data}
        pagination={false}
      />
      <QueryPagination pageName='certificates' countPage={dataCount} />
    </>
  );
}

export default CertificatesTable;
