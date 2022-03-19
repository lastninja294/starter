import React from 'react';

export const otherComponentConfigs = [
  {
    path: '/components/other/anchor',
    component: React.lazy(() => import('./Anchor')),
  },
  {
    path: '/components/other/backtop',
    component: React.lazy(() => import('./BackTop')),
  },
  {
    path: '/components/other/divider',
    component: React.lazy(() => import('./Divider')),
  },
  {
    path: '/components/other/config-provider',
    component: React.lazy(() => import('./ConfigProvider')),
  },
];
