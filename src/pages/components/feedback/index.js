import React from 'react';
export const feedBackComponentConfigs = [
  {
    path: '/components/feedback/alert',
    component: React.lazy(() => import('./Alert')),
  },
  {
    path: '/components/feedback/modal',
    component: React.lazy(() => import('./Modal')),
  },
  {
    path: '/components/feedback/message',
    component: React.lazy(() => import('./Message')),
  },
  {
    path: '/components/feedback/notification',
    component: React.lazy(() => import('./Notification')),
  },
  {
    path: '/components/feedback/progress',
    component: React.lazy(() => import('./Progress')),
  },
  {
    path: '/components/feedback/pop-confirm',
    component: React.lazy(() => import('./PopConfirm')),
  },
  {
    path: '/components/feedback/spin',
    component: React.lazy(() => import('./Spin')),
  },
  {
    path: '/components/feedback/drawer',
    component: React.lazy(() => import('./Drawer')),
  },
  {
    path: '/components/feedback/result',
    component: React.lazy(() => import('./Result')),
  },
  {
    path: '/components/feedback/skeleton',
    component: React.lazy(() => import('./Skeleton')),
  },
];
