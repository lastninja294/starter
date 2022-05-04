import React, {useState} from 'react';
import {useQuery /*,useMutation, useQueryClient*/} from 'react-query';
import {Table, Button, Space} from 'antd';
import Delete from '../delete/delete.component';
// import Edit from '../edit/edit.component';
import Edit from '../edit/new-edit.component';
import {AiOutlineEdit} from 'react-icons/ai';
import PropTypes from 'prop-types';
// import {AiOutlineDelete} from 'react-icons/ai';
// import QueryPagination from 'pages/Pagination';
import ShowIamges from '../show-image/show-image';
import {getAllData} from '../../api/apiFunction';
// import {deleteData} from '../../api/apiFunction';
const NewTableComponent = () => {
  const {data, isLoading} = useQuery('staff', getAllData);
  const [dataID, setDataID] = useState(1);
  const [visible, setVisible] = useState(false);
  console.log('type:', typeof dataID);
  console.log(dataID);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'TITLE-RU',
      dataIndex: 'title_ru',
      key: 'title_ru',
      ellipsis: true,
    },
    {
      title: 'DESCRIPTION-RU',
      dataIndex: 'description_ru',
      key: 'description_ru',
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
          <Button
            size='large'
            style={{padding: '0'}}
            type='link'
            onClick={() => {
              setVisible(true);
              setDataID(record.id);
            }}>
            <AiOutlineEdit size={'20px'} />
          </Button>
          <Delete id={record.id} />
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
      <Edit dataID={dataID} visible={visible} setVisible={setVisible} />
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
