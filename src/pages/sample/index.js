import React from 'react';

export const samplePagesConfigs = [
  {
    path: '/sample/settings',
    component: React.lazy(() => import('./Settings')),
  },
  {
    path: '/sample/news',
    component: React.lazy(() => import('./News')),
  },
  {
    path: '/sample/staff',
    component: React.lazy(() => import('./Staff')),
  },
  {
    path: "/sample/certificates",
    component: React.lazy(() => import('./Certificates')),
  },
  {
    path: "/sample/surgery",
    component: React.lazy(() => import('./Surgery')),
  }
];
