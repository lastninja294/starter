import React from 'react';
// import {useQuery /*,useMutation, useQueryClient*/} from 'react-query';
import {Table, Space /*, Spin*/} from 'antd';
import Delete from '../delete/delete.component';
// import Edit from '../edit/edit.component';
import Edit from '../edit/new-edit.component';
import PropTypes from 'prop-types';
// import {AiOutlineDelete} from 'react-icons/ai';
// import QueryPagination from 'pages/Pagination';
import ShowIamges from '../show-image/show-image';
// import {getAllData} from '../../api/apiFunction';
import {useGetData} from '../../api/apiFunction';

const NewTableComponent = () => {
  const {data, isLoading, isError, error} = useGetData();
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      ellipsis: true,
      key: 'id',
    },
    {
      title: 'TITLE-RU',
      dataIndex: '',
      key: 'title_ru',
      ellipsis: true,
      render: (record) => record?.title?.ru,
    },
    {
      title: 'DESCRIPTION-RU',
      dataIndex: '',
      key: 'description_ru',
      ellipsis: true,
      render: (record) => record?.description?.ru,
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: 'PHONE',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
    },
    {
      title: 'IMAGES',
      key: 'action',
      align: 'center',
      dataIndex: '',
      render: (record) => <ShowIamges data={record} />,
    },
    {
      title: 'ACTION',
      key: 'action',
      align: 'center',
      dataIndex: '',
      render: (record) => (
        <Space size='middle'>
          <Edit data={record} />
          <Delete id={record?.id} />
        </Space>
      ),
    },
  ];
  if (isError) {
    console.log(error.request.status);
    return `${error}`;
  }
  return (
    <>
      <Table
        loading={isLoading}
        rowKey={'id'}
        columns={columns}
        dataSource={data}
        pagination={10}
      />
      {/* <QueryPagination /> */}
    </>
  );
};
export default NewTableComponent;
NewTableComponent.propTypes = {
  staffData: PropTypes.array,
  handleDelete: PropTypes.func,
  fetchData: PropTypes.func,
};
