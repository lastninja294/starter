import React from 'react';
import {Table} from 'antd';

import PropTypes from 'prop-types';
import Delete from '../delete/delete';
import EditPost from '../edit_post/edit_post';
import draftToHtml from 'draftjs-to-html';
import MediaView from '../media/media';

function NewsTable({posts}) {
  const columns = [
    {
      title: 'ID',
      width: '5%',
      dataIndex: 'id',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'TITLE',
      width: "25%",
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      ellipsis: true,

    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      fixed: 'left',
      width: "36%",
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
      title: 'Edit',
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (post) => {
        return <EditPost post={post} />;
      },
    },
    {
      title: 'Delete',
      key: 'operation',
      fixed: 'right',
      width: 30,
      render: (record) => <Delete id={record.id} />,
    },
  ];
  return (
    <Table
      rowKey='id'
      pagination={{pageSize: 5}}
      columns={columns}
      bordered={true}
      dataSource={[...posts]}
    />
  );
}

export default NewsTable;

NewsTable.propTypes = {
  posts: PropTypes.array,
};
