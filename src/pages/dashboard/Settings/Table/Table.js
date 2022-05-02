import {useEffect, useState} from 'react';
import {message, Table} from 'antd';
import {useIntl} from 'react-intl';
import {Space} from 'antd';
import Error404 from 'pages/errorPages/Error404';
import QueryPagination from 'pages/Pagination';
import useDeleteData from 'pages/Pagination/useDeleteData';
import useGetData from 'pages/Pagination/useData';
import TableActions from './Actions';
import {useHistory} from 'react-router-dom';

export default function TableComponent() {
  // define the history object, because we need to define the page number and page size in the url
  const history = useHistory();

  // define the search query
  const params = new URLSearchParams(history.location.search);

  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const [page, setPage] = useState(params.get('page') || 1);
  const [size, setSize] = useState(params.get('size') || 10);

  // url for the query
  let [url, setUrl] = useState(
    `https://axiosuchunsinovapi.herokuapp.com/staff?page=${page}&size=${size}`,
  );

  // define the data of the table
  const {data, status} = useGetData('hospitals', url);

  // define mutateAsync and isLoading(For the delete button)
  const {mutateAsync, isLoading, isSuccess, isError} = useDeleteData(
    'hospitals',
    'https://axiosuchunsinovapi.herokuapp.com/users/10',
  );

  // define react-intl  messages for language switching
  const {messages} = useIntl();

  // define the columns of the table
  const columns = [
    {
      title: messages['common.name'],
      dataIndex: ['title', 'uz'],
      key: ['title', 'uz'],
    },
    {
      title: messages['common.address'],
      dataIndex: ['title', 'en'],
      key: ['title', 'uz'],
    },
    {
      title: messages['common.phone'],
      dataIndex: ['title', 'ru'],
      key: ['title', 'uz'],
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <TableActions isLoading={isLoading} mutateAsync={mutateAsync} />
      ),
    },
  ];

  if (isSuccess) {
    message.success('Item deleted successfully. Good job!');
  }
  if (isError) {
    message.error('Error deleting item. Try again later');
  }

  useEffect(() => {
    setPage(params.get('page') || 1);
    setSize(params.get('size') || 10);
    setUrl(
      `https://axiosuchunsinovapi.herokuapp.com/staff?page=${page}&size=${size}`,
    );
    console.log('page: ' + page);
    console.log(history.location.search);
  }, [history.location.search]);

  // if the data is not defined, return the error page
  if (status === 'error') {
    return <Error404 />;
  }
  console.log(status);

  console.table(data);
  return (
    <Space
      direction='vertical'
      size={'middle'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'right',
      }}>
      <Table
        title={() => "Hospital's List"}
        bordered={true}
        rowKey='id'
        columns={columns}
        dataSource={data}
        loading={status === 'loading'}
        pagination={false}
        size='small'
      />
      <QueryPagination pageName='settings' />
    </Space>
  );
}
