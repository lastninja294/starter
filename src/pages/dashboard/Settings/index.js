import React, {useState} from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import TableComponent from './Table/Table';
import {Space} from 'antd';
import CreateModal from './Table/Create';
import IsLoadingContext from './settingContext';

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <>
      <AppPageMetadata title='Settings' />
      <IsLoadingContext.Provider value={[isLoading, setIsLoading]}>
        <Space direction='vertical'>
          <CreateModal />
          <TableComponent />
        </Space>
      </IsLoadingContext.Provider>
    </>
  );
};

export default Settings;
