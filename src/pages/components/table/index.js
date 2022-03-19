import React from 'react';

export const tableComponentConfigs = [
  {
    path: '/components/table/basic-table',
    component: React.lazy(() => import('./Basic')),
  },
  {
    path: '/components/table/data',
    component: React.lazy(() => import('./Data')),
  },
];
