import React from 'react';
import {Table} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import Delete from '../delete/delete';
import EditPost from '../edit_post/edit_post';
import draftToHtml from 'draftjs-to-html';
import MediaView from '../media/media';
import QueryPagination from 'pages/Pagination';
import { getAllNews } from 'hooks';
import { useHistory } from 'react-router-dom';
// import Error404 from 'pages/errorPages/Error404';

function NewsTable({posts  }) {
  
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const page = params.get('page');
  const size = params.get('size');
	const {isLoading , data} = getAllNews({page,size});

  const {messages} = useIntl();
  const columns = [
    {
      title: 'ID',
      width: '5%',
      dataIndex: 'id',
      key: 'name',
      fixed: 'left',
    },
    {
      title: `${messages['common.title']} uz `,
      width: '12.5%',
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      ellipsis: true,
      render: (title)=>(<>{title?.uz}</>)
      
    },
    {
      title: `${messages['common.title']} ru `,
      width: '12.5%',
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      ellipsis: true,
      render: (title)=>(<>{title?.ru}</>)
    },
    {
      title: `${messages['common.description']} uz`,
      dataIndex: 'description',
      key: 'description',
      fixed: 'left',
      width: '18%',
      render: (des) => {
        // newsDataId.post_description JSON.parsga beriladi
        const postHtml = JSON.parse(des?.uz);
        const post_des_html = draftToHtml(postHtml);
        return (
          <div
            className='descrip_value'
            style={{width: '100%', height: '20px', overflow: 'hidden'}}
            dangerouslySetInnerHTML={{__html: post_des_html}}
          />
        );
      },
    },
    {
      title: `${messages['common.description']} ru`,
      dataIndex: 'description',
      key: 'description',
      fixed: 'left',
      width: '18%',
      render: (des) => {
        // newsDataId.post_description JSON.parsga beriladi
        const postHtml = JSON.parse(des?.ru);
        const post_des_html = draftToHtml(postHtml);
        return (
          <div
            className='descrip_value'
            style={{width: '100%', height: '20px', overflow: 'hidden'}}
            dangerouslySetInnerHTML={{__html: post_des_html}}
          />
        );
      },
    },
    {
      title: 'Images',
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (record) => <MediaView post={record} type={'image'} />,
    },
    {
      title: 'Videos',
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (record) => (
        <>
          <MediaView post={record} type={'video'} />
        </>
      ),
    },
    {
      title: messages['common.edit'],
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (post) => {
        return <EditPost post={post} />;
      },
    },
    {
      title: messages['common.delete'],
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (record) => <Delete id={record.id} />,
    },
  ];
  // if(isError)return <Error404 />;
  return (<>
    <Table
      rowKey='id'
      pagination={false}
      columns={columns}
      bordered={true}
      loading={isLoading}
      dataSource=  { isLoading? []: [...posts]}
      />
    <QueryPagination pageName = {'news'} countPage={data?.data?.count} />
      </>
  );
}

export default NewsTable;

NewsTable.propTypes = {
  posts: PropTypes.array,
  url: PropTypes.string,
};
