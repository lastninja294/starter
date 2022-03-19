import React from 'react';

export const layoutComponentConfigs = [
  {
    path: '/components/layout/divider',
    component: React.lazy(() => import('./Divider')),
  },
  {
    path: '/components/layout/space',
    component: React.lazy(() => import('./Space')),
  },
];
