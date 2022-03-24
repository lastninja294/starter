import React from 'react';
import {Typography} from 'antd';
import ComposeCertificate from './compose-certificate';

const {Title} = Typography;

const Certificates = () => {
  return (
    <>
      <div className='certificates-title-container'>
        <Title level={3}>Certificates Page</Title>
        <ComposeCertificate />
      </div>
      <p>You can kick start your app</p>
    </>
  );
};

export default Certificates;
