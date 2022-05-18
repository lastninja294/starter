import {Table, Space} from 'antd';
import {useIntl} from 'react-intl';
import Error404 from 'pages/errorPages/Error404';
import Error401 from 'pages/errorPages/Error401';
import Error500 from 'pages/errorPages/Error500';
import Error403 from 'pages/errorPages/Error403';
import Maintenance from 'pages/errorPages/Maintenance';
import QueryPagination from 'pages/Pagination';
import {getAllSettings} from 'hooks';
import {useHistory} from 'react-router-dom';
import TableActions from './Actions';

export default function TableComponent() {
  // define the history object, because we need to define the page number and page size in the url
  const history = useHistory();

  // define the search query
  const params = new URLSearchParams(history.location.search);

  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const page = params.get('page') || 1;
  const size = params.get('size') || 10;
  const {isLoading, data, status, isError, error, refetch} = getAllSettings({
    page,
    size,
  });
  console.log(data?.data);
  // define react-intl  messages for language switching
  const {messages} = useIntl();

  // define the columns of the table
  const columns = [
    {
      title: messages['common.name'],
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: messages['common.address'],
      dataIndex: 'address',
      key: 'address',
      ellipsis: true,
    },
    {
      title: messages['common.phone'],
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (item) => <TableActions refetch={refetch} id={item.id} />,
    },
  ];

  // if the data is not defined, return the error page
  if (isError) {
    if (error?.response.status === 404) {
      return <Error404 />;
    } else if (error?.response.status === 500) {
      return <Error500 />;
    } else if (error?.response.status === 401) {
      return <Error401 />;
    } else if (error?.response.status === 403) {
      return <Error403 />;
    } else {
      return <Maintenance />;
    }
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
        rowKey='id'
        columns={columns}
        dataSource={status === 'success' ? data.data.data : []}
        loading={isLoading}
        pagination={false}
        size='small'
        scroll={{y: 'calc(100vh - 300px)'}}
      />
      <QueryPagination
        pageName='settings'
        countPage={status === 'success' ? data.data.count : 0}
      />
    </Space>
  );
}
