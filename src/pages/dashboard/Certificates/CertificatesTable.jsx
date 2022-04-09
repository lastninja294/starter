import {Table} from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import getColumnSearchProps from './utils/getColumnSearchProps';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
    width: '55px',
  },
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
    filterDropdown: (...all) => {
      console.log('all', ...all);
    },
    ...getColumnSearchProps('description'),
  },
];

// const getColumnSearchProps = dataIndex => {
//   return {
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//     }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={node => {
//             console.log("I'm also working!");
//             if (!searchInput) searchInput = node;
//           }}
//           id={`certificates-input-${dataIndex}`}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={e =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() => confirm()}
//           style={{ marginBottom: 8 /* , display: "block"  */ }}
//           allowClear
//         />

//         <div style={{ display: 'block' }}>
//           <Button
//             type="primary"
//             onClick={() => confirm()}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90, marginRight: '8px' }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => {
//               clearFilters();
//               confirm();
//             }}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//     ),
//     filterIcon: filtered => (
//       <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
//     ),
//     onFilter: (value, record) => {
//       console.log('value, record: ', value, record);
//       return record[dataIndex]
//         ? record[dataIndex]
//             .toString()
//             .toLowerCase()
//             .includes(value.toLowerCase())
//         : '';
//     },
//     onFilterDropdownVisibleChange: visible => {
//       console.log("I'm working!");
//       if (visible) setTimeout(() => searchInput.select(), 50);
//     },
//   };
// };

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
        // console.log('data: ', transformedData)
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
