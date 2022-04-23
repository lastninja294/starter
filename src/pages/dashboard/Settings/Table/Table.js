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
  const page = params.get('page');
  // const size = params.get('size');

  // url for the query
  let url = `https://swapi.dev/api/people/?page=${page}`;

  // define the data of the table
  const { data, status } = useGetData('hospitals', url);

  console.log('page', page);
  console.log('data', data);
  console.log('status', status);

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
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: messages['common.address'],
      dataIndex: 'created',
      key: 'address',
    },
    {
      title: messages['common.phone'],
      dataIndex: 'eye_color',
      key: 'phone',
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

  // if the data is not defined, return the error page
  if (status === 'error') {
    return <Error404 />;
  }
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
        rowKey='name'
        columns={columns}
        dataSource={data?.results}
        loading={status === 'loading'}
        pagination={false}
        size='small'
      />
      <QueryPagination pageName='settings' />
    </Space>
  );
}
