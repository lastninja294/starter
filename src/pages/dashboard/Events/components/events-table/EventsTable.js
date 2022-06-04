import {Space, Table} from 'antd';
import EventDelete from '../events-delete/EventsDelete';
import EventsEdit from '../events-edit/EventsEdit';
import EventsImage from '../events-image/EventsImage';
import EventsVideo from '../events-video/EventsVideo';
import draftToHtml from 'draftjs-to-html';
import {getAllEvents} from 'hooks';
import {useHistory} from 'react-router-dom';
import QueryPagination from 'pages/Pagination';
import Error404 from 'pages/errorPages/Error404';
import Error401 from 'pages/errorPages/Error401';
import Error500 from 'pages/errorPages/Error500';
import Error403 from 'pages/errorPages/Error403';

// import {EditorState, ContentState, convertFromHTML} from 'draft-js';
// import useGetData from 'pages/Pagination/useData';

const EventTable = () => {
  const history = useHistory();
  // define the search query
  const params = new URLSearchParams(history.location.search);
  //  define page and pageSize. If they are not defined, set them to 1 and 10
  const page = params.get('page') || 1;
  const size = params.get('size') || 10;

  const {data, isLoading, isError, error, refetch} = getAllEvents({
    page,
    size,
  });

  const columns = [
    // {
    //   title: 'Id',
    //   width: 60,
    //   dataIndex: 'id',
    //   key: 'id',
    //   align: 'center',
    //   ellipsis: true,
    // },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '25%',
      key: 'title',
      ellipsis: true,
      render: (title) => <>{title?.uz}</>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '50%',
      key: 'description',
      ellipsis: true,
      render: (description) => {
        // return draftToHtml(description?.uz);
        return description?.uz;

      },
    },
    {
      title: '',
      dataIndex: '',
      width: '25%',
      align: 'center',
      render: (item) => (
        <div
          style={{
            maxWidth: '350px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <EventsImage item={item.src} />
          <EventsVideo item={item.src} />
          <EventsEdit item={item} refetch={refetch} />
          <EventDelete item={item} refetch={refetch} />
        </div>
      ),
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
    <Space direction='vertical'>
      <Table
        title={() => "Event's List"}
        bordered={true}
        rowKey='id'
        columns={columns}
        dataSource={data?.data}
        loading={isLoading}
        pagination={false}
        size='small'
        scroll={{y: 'calc(100vh - 300px)'}}
      />
      <QueryPagination pageName='events' countPage={1000} />
    </Space>
  );
};

export default EventTable;
