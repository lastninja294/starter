import React from 'react';
import {FiSettings} from 'react-icons/fi';
import {IoNewspaperOutline} from 'react-icons/io5';
import { CgUserList } from 'react-icons/cg';
import { GrCertificate } from 'react-icons/gr';
import {FaHospitalUser} from 'react-icons/fa';
import {BsCalendarEvent} from 'react-icons/bs';
import { UsergroupAddOutlined } from '@ant-design/icons';

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
        path: '/dashboard/settings',
      },
      {
        id: 'news',
        title: 'News',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <IoNewspaperOutline />,
        path: '/dashboard/news',
      },
      {
        id: 'staff',
        title: 'Staff Page',
        messageId: 'common.staff',
        type: 'item',
        icon: <CgUserList />,
        path: '/dashboard/staff',
      },
      {
        id: 'certificates',
        title: 'Certificates',
        messageId: 'sidebar.pages.sample.certificates',
        type: 'item',
        icon: <GrCertificate />,
        path: '/dashboard/certificates',
      },
      {
        id: 'surgery',
        title: 'Surgery',
        messageId: 'sidebar.pages.sample.surgery',
        type: 'item',
        icon: <FaHospitalUser />,
        path: '/dashboard/surgery',
      },
      {
        id: 'events',
        title: 'Events',
        messageId: 'sidebar.pages.sample.events',
        type: 'item',
        icon: <BsCalendarEvent />,
        path: '/dashboard/events',
      },
      {
        id: 'application',
        title: 'Application',
        messageId: 'sidebar.pages.sample.application',
        type: 'item',
        icon: <UsergroupAddOutlined />,
        path: '/dashboard/application',
      }
    ],
  },
];
export default routesConfig;
