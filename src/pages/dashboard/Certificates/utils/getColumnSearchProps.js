import React from 'react';
import {Input, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

let searchInput;

const getColumnSearchProps = (dataIndex) => {
  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{padding: 8}}>
        <Input
          ref={(node) => {
            if (node && searchInput !== node) searchInput = node;
          }}
          id={`certificates-input-${dataIndex}`}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          style={{marginBottom: 8, width: '200px'}}
          allowClear
        />

        <div style={{display: 'block'}}>
          <Button
            type='primary'
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size='small'
            style={{width: 90, marginRight: '8px'}}>
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              confirm();
            }}
            size='small'
            style={{width: 90}}>
            Reset
          </Button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}} />
    ),
    onFilter: (value, record) => {
      return record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '';
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) setTimeout(() => searchInput.select(), 50);
    },
  };
};

export default getColumnSearchProps;
