import React from 'react';
import {DeleteCertificate, EditCertificate, ImageView} from '../components';

export const columns = (refetch) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '55px',
  },
  {
    title: 'Description UZ',
    key: 'description uz',
    dataIndex: 'description',
    render: (description) => <>{description.uz}</>,
  },
  {
    title: 'Description RU',
    key: 'description ru',
    dataIndex: 'description',
    render: (description) => <>{description.ru}</>,
  },
  {
    title: 'Images',
    key: 'image view',
    dataIndex: 'src',
    render: (src) => (
      <ImageView style={{height: '100px'}} imageUrl={src[0].url} />
    ),
    // Faqat bitta image-ni url-ni oladi
  },
  {
    title: 'Actions',
    key: 'actions',
    dataIndex: 'id',
    render: (id) => (
      <div style={{display: 'flex'}}>
        <EditCertificate />
        <DeleteCertificate id={id} refetch={refetch}/>
      </div>
    ),
  },
];
