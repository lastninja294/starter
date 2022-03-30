import {Table} from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const columns = [
  {
    title: 'Certificate',
    dataIndex: 'certificateUrl',
    render: (url) => <img style={{height: '100px'}} src={url} alt='' />,
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    width: '50%',
  },
];
// let data = [
//   {
//     key: 1,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freesampletemplates.com%2Fwp-content%2Fuploads%2F2017%2F06%2FCertificate-Sample-123.png&f=1&nofb=1',
//     description: 'Awesome achievement!!!',
//   },
//   {
//     key: 2,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMp9wrVCWRc29KCPfK9d9QHaFt%26pid%3DApi&f=1',
//     description: 'Fascinating achievement!!!',
//   },
//   {
//     key: 3,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F1200x750%2F111100%2Fachievement-award-layout-certificate-template_111171-original.png&f=1&nofb=1',
//     description: 'Marvellous achievement!!!',
//   },
//   {
//     key: 4,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freesampletemplates.com%2Fwp-content%2Fuploads%2F2017%2F06%2FCertificate-Sample-123.png&f=1&nofb=1',
//     description: 'Awesome achievement!!!',
//   },
//   {
//     key: 5,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMp9wrVCWRc29KCPfK9d9QHaFt%26pid%3DApi&f=1',
//     description: 'Fascinating achievement!!!',
//   },
//   {
//     key: 6,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F1200x750%2F111100%2Fachievement-award-layout-certificate-template_111171-original.png&f=1&nofb=1',
//     description: 'Marvellous achievement!!!',
//   },
//   {
//     key: 7,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freesampletemplates.com%2Fwp-content%2Fuploads%2F2017%2F06%2FCertificate-Sample-123.png&f=1&nofb=1',
//     description: 'Awesome achievement!!!',
//   },
//   {
//     key: 8,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMp9wrVCWRc29KCPfK9d9QHaFt%26pid%3DApi&f=1',
//     description: 'Fascinating achievement!!!',
//   },
//   {
//     key: 9,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F1200x750%2F111100%2Fachievement-award-layout-certificate-template_111171-original.png&f=1&nofb=1',
//     description: 'Marvellous achievement!!!',
//   },
//   {
//     key: 10,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freesampletemplates.com%2Fwp-content%2Fuploads%2F2017%2F06%2FCertificate-Sample-123.png&f=1&nofb=1',
//     description: 'Awesome achievement!!!',
//   },
//   {
//     key: 11,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMp9wrVCWRc29KCPfK9d9QHaFt%26pid%3DApi&f=1',
//     description: 'Fascinating achievement!!!',
//   },
//   {
//     key: 12,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F1200x750%2F111100%2Fachievement-award-layout-certificate-template_111171-original.png&f=1&nofb=1',
//     description: 'Marvellous achievement!!!',
//   },
//   {
//     key: 13,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freesampletemplates.com%2Fwp-content%2Fuploads%2F2017%2F06%2FCertificate-Sample-123.png&f=1&nofb=1',
//     description: 'Awesome achievement!!!',
//   },
//   {
//     key: 14,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMp9wrVCWRc29KCPfK9d9QHaFt%26pid%3DApi&f=1',
//     description: 'Fascinating achievement!!!',
//   },
//   {
//     key: 15,
//     certificateUrl:
//       'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.tmimgcdn.com%2Fscr%2F1200x750%2F111100%2Fachievement-award-layout-certificate-template_111171-original.png&f=1&nofb=1',
//     description: 'Marvellous achievement!!!',
//   },
// ];

function CertificatesTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(({data: photos}) => {
        console.log('photos: ', photos);
        
        const transformedData = photos.reduce((acc, photo) => {
          acc.push({
            description: photo.title,
            key: photo.id,
            certificateUrl: photo.url,
          });
          return acc;
        }, []);

        // console.log('data: ', data);
        setData(transformedData);
      });
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default CertificatesTable;
