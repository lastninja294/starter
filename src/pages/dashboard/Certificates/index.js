import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import './index.styles.css';

import {Typography} from 'antd';
import ComposeCertificate from './ComposeCertificate';
import CertificatesTable from './CertificatesTable';

const {Title} = Typography;

const Certificates = () => {
  return (
    <>
      <AppPageMetadata title='Certificates' />
      <div className='certificates-title-container'>
        <Title level={3}>Certificates Page</Title>
        <ComposeCertificate />
      </div>
      <p>You can kick start your app</p>
      <CertificatesTable/>
    </>
  );
};

export default Certificates;
