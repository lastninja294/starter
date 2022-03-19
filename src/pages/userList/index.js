import React from 'react';

export const userListConfig = [
  {
    path: '/extra-pages/list-type/flat',
    component: React.lazy(() => import('./Flat/index')),
  },
  {
    path: '/extra-pages/list-type/morden',
    component: React.lazy(() => import('./Morden/index')),
  },
  {
    path: '/extra-pages/list-type/standard',
    component: React.lazy(() => import('./Standard/index')),
  },
];
