import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import TableComponent from './Table/Table';
import {Space} from 'antd';
import CreateModal from './Table/Create';


const Settings = () => {
  return (
    <>
        <AppPageMetadata title='Settings' />
        <Space direction='vertical'>
          <CreateModal />
          <TableComponent />
        </Space>
    </>
  );
};

export default Settings;
