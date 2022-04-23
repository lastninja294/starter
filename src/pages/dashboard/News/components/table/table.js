import React from 'react';
import {Table} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import Delete from '../delete/delete';
import EditPost from '../edit_post/edit_post';
import draftToHtml from 'draftjs-to-html';
import MediaView from '../media/media';
import QueryPagination from 'pages/Pagination';
import { useQuery } from 'react-query';
import axios from 'axios';
import Error404 from 'pages/errorPages/Error404';
import { useHistory } from 'react-router-dom';

function NewsTable({posts  }) {
const history = useHistory();
const params = new URLSearchParams(history.location.search);
const page = params.get('page');
const size = params.get('size');
console.log(page , size);
const url = `https://swapi.dev/api/people/?page=${page}&size=${size}`;
    
  const {data ,error, isLoading } = useQuery('get-news-data',  () => {
    return  axios.get(url);
  });
  console.log(data?.data);
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
      title: messages['common.title'],
      width: '25%',
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: messages['common.description'],
      dataIndex: 'description',
      key: 'description',
      fixed: 'left',
      width: '36%',
      render: (des) => {
        // newsDataId.post_description JSON.parsga beriladi
        const postHtml = JSON.parse(des);
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
  if(error)return <Error404 />;
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
