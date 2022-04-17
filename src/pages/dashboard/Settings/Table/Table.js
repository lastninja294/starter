import {message, Table} from 'antd';
import {useIntl} from 'react-intl';
import {Space} from 'antd';
import Error404 from 'pages/errorPages/Error404';
import QueryPagination from 'pages/Pagination';
import useDeleteData from 'pages/Pagination/useDeleteData';
import useGetData from 'pages/Pagination/useData';
import TableActions from './Actions';

export default function TableComponent({url}) {
  // define mutateAsync and isLoading(For the delete button)
  const {mutateAsync, isLoading, isSuccess, isError} = useDeleteData(
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
  console.log(isLoading, isSuccess, isError);

  // define the data of the table
  const {data, status} = useGetData(url);
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
      />
      <QueryPagination />
    </Space>
  );
}
