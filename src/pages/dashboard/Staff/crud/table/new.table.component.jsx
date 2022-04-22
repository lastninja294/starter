import React from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {Table, Space} from 'antd';
import Edit from '../edit/edit.component';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
// import QueryPagination from 'pages/Pagination';
import ShowIamges from '../show-image/show-image';
import {getAllData} from '../../api/apiFunction';
import {deleteData} from '../../api/apiFunction';
const NewTableComponent = ({fetchData}) => {
  const {data, isLoading} = useQuery('staff', getAllData);
  const queryClient = useQueryClient();
  const {mutateAsync /*isLoading: isDeleting*/} = useMutation(deleteData);
  const remove = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries('staff');
  };
  console.log(data);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'TITLE-UZ',
      dataIndex: 'title_uz',
      key: 'title_uz',
      ellipsis: true,
    },
    {
      title: 'TITLE-RU',
      dataIndex: 'title_ru',
      key: 'title_ru',
      ellipsis: true,
    },
    {
      title: 'TITLE-EN',
      dataIndex: 'title_en',
      key: 'title_en',
      ellipsis: true,
    },
    {
      title: 'DESCRIPTION-UZ',
      dataIndex: 'description_uz',
      key: 'description_uz',
      ellipsis: true,
    },
    {
      title: 'DESCRIPTION-RU',
      dataIndex: 'description_ru',
      key: 'description_ru',
      ellipsis: true,
    },
    {
      title: 'DESCRIPTION-UZ',
      dataIndex: 'description_uz',
      key: 'description_uz',
      ellipsis: true,
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
      render: (record) => (
        <Space size='middle'>
          <ShowIamges data={data} id={record.id} />
        </Space>
      ),
    },
    {
      title: 'ACTION',
      key: 'action',
      align: 'center',
      render: (record) => (
        <Space size='middle'>
          <Edit id={record.id} fetchData={fetchData} data={data} />
          <AiOutlineDelete
            style={{fontSize: '1.3em', color: 'red', cursor: 'pointer'}}
            onClick={() => remove(record.id)}
          />
        </Space>
      ),
    },
  ];
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
