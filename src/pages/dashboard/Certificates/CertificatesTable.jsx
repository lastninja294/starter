import {Table} from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const columns = [
  {
    title: 'Certificate',
    dataIndex: 'certificateUrl',
    render: (url) => <img style={{height: '100px'}} src={url} alt='' />,
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    width: '50%',
  },
];

function CertificatesTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('false');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    pageSizeOptions: ['5', '10', '20', '50', '100'],
    hideOnSinglePage: true,
  });
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(({data: photos}) => {
        console.log('photos: ', photos);

        const transformedData = photos.reduce((acc, photo) => {
          acc.push({
            description: photo.title,
            key: photo.id,
            certificateUrl: photo.url,
          });
          return acc;
        }, []);

        setPagination({
          ...pagination,
          total: 50,
        });
        setData(transformedData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default CertificatesTable;
