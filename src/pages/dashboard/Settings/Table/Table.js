import {Table} from 'antd';
import {useIntl} from 'react-intl';
import {Space} from 'antd';
import Error404 from 'pages/errorPages/Error404';
import QueryPagination from 'pages/Pagination';
import useGetData from 'pages/Pagination/useData';
import {getAllSettings} from '../../../../hooks/index';
import TableActions from './Actions';
import {useHistory} from 'react-router-dom';

export default function TableComponent() {
  // define the history object, because we need to define the page number and page size in the url
  const history = useHistory();

  // define the search query
  const params = new URLSearchParams(history.location.search);

  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const page = params.get('page') || 1;
  const size = params.get('size') || 10;
  const url = `https://axiosuchunsinovapi.herokuapp.com/hospitals?page=${page}&size=${size}`;
  const {data, status} = useGetData(['hospitals', url], url);

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
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: messages['common.phone'],
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (item) => <TableActions id={item.id} />,
    },
  ];

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
        rowKey='id'
        columns={columns}
        dataSource={status === 'success' ? data.data : []}
        loading={status === 'loading'}
        pagination={false}
        size='small'
      />
      <QueryPagination
        pageName='settings'
        countPage={status === 'success' ? data.count : 0}
      />
    </Space>
  );
}
