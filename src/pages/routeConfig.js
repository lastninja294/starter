import React from 'react';
import {FiSettings} from 'react-icons/fi';
import {IoNewspaperOutline} from 'react-icons/io5';
import { CgUserList } from 'react-icons/cg';
import { GrCertificate } from 'react-icons/gr';
import {FaHospitalUser} from 'react-icons/fa';

const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'settings',
        title: 'Settings',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        icon: <FiSettings />,
        path: '/sample/settings',
      },
      {
        id: 'news',
        title: 'News',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <IoNewspaperOutline />,
        path: '/sample/news',
      },
      {
        id: 'staff',
        title: 'Staff Page',
        messageId: 'common.staff',
        type: 'item',
        icon: <CgUserList />,
        path: '/sample/staff',
      },
      {
        id: 'certificates',
        title: 'Certificates',
        messageId: 'sidebar.pages.sample.certificates',
        type: 'item',
        icon: <GrCertificate />,
        path: '/sample/certificates',
      },
      {
        id: 'surgery',
        title: 'Surgery',
        messageId: 'sidebar.pages.sample.surgery',
        type: 'item',
        icon: <FaHospitalUser />,
        path: '/sample/surgery',
      },
    ],
  },
];
export default routesConfig;
