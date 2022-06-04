import React from 'react';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import './index.styles.css';

import {Typography} from 'antd';
import {getAllCertificates} from 'hooks';
import {CreateCertificate} from './components/';
import CertificatesTable from './certificates-table';
import Error404 from 'pages/errorPages/Error404';
import {useHistory} from 'react-router-dom';

const {Title} = Typography;

const Certificates = () => {
  const params = useHistory();
  const searchParams = new URLSearchParams(params.location.search);

  const {isLoading, data, isError, refetch} = getAllCertificates({
    page: searchParams.get('page'),
    size: searchParams.get('size'),
  });

  if (isError) return <Error404 />;

  return (
    <AppPageMetadata title='Certificates'>
      <div className='certificates-title-container'>
        <Title level={3}>Certificates Page</Title>
        <CreateCertificate />
      </div>
      <CertificatesTable
        loading={isLoading}
        data={data?.data}
        refetch={refetch}
        dataCount={data?.data?.count || 100}
      />
    </AppPageMetadata>
  );
};

export default Certificates;
